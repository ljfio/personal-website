---
title: Umbraco Multi-Site with Azure Front Door
description: How to access multiple homes via one Front Door
published: 2023-02-16 21:50:49
tags: ['umbraco', 'azure', 'cloud']
---

## Problem

An Umbraco website configured for multi-site was unable to direct traffic to the correct root node. The architecture involved routing traffic through Azure Front Door to a single Windows based Azure App Service instance, configured with an additional staging slot. The _Culture and Hostnames_ properties were configured for each node to have unique domains against each.

## Diagnosis

With most reverse proxy solutions when a web request is forwarded on to receiving web server the origin `Host` header is typically hidden, this is due to the `Host` header for the web request being the one the reverse proxy solution knows for the intended endpoint. This is no different for Azure Front Door, as the [documentation][front-door-headers] states, the original client requests expected hostname is placed into the `X-Forwarded-Host` header in the subsequent request to the backend.

Since this value is obscured, Umbraco is unable to route the traffic to the expected endpoint and selects the default route.

## Expected Solution

Since the project was using Umbraco 10, our solution needed to target how ASP .NET Core handles headers. It is possible to configure an ASP .NET Core site to replace the `Host` header with the value in `X-Forwarded-Host` using the included `ForwardHeadersMiddleware`.

```csharp
app.UseForwardedHeaders();
```

Which must be configured when the services are being built.

```csharp
services.Configure<ForwardedHeadersOptions>(options => options.ForwardedHeaders = ForwardedHeaders.All);
```

This was tested locally using Postman to send a request against our running server along with the `X-Forwarded-Host` header set to being the requested value.

## Unexpected Problem

When the solution was deployed into Azure, when visiting each distinct host the site was still loading the default route. It appeared that the expected solution did not work. This was further diagnosed with the incoming request headers being dumped to the client for debugging.

It was clear that the `Host` was not being replaced with the value in `X-Forwarded-Host` as it was when running locally. The question is what was different?

## Further Diagnosis

The way that Azure hosts ASP .NET Core sites, specifically when using a Windows based App Service, the sites hosting model can be configured to run `InProcess` or `OutOfProcess`.

When running in `InProcess` IIS is repsonsible for routing requests and controls the way that headers are processed in the HTTP request.

With `OutOfProcess` the site is launched using the `dotnet`  command and exists as a sub-process with HTTP traffic being sent to the launched Kestrel web server.

In our instance, we were hosting ASP .NET Core `InProcess` negating the work that the `ForwardedHeadersMiddleware` was doing.

## Actual Solution

Our approach needed an update to the `web.config` for IIS to rewrite the `Host` header with the `X-Forwarded-Host`.

```xml
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Replace Host with X-Forwarded-Host Header" enabled="true" stopProcessing="false">
          <match url="(.*)" />
          <conditions logicalGrouping="MatchAll" trackAllCaptures="false">
            <add input="{HTTP_X_FORWARDED_HOST}" pattern="^$" negate="true" />
          </conditions>
          <serverVariables>
            <set name="HTTP_HOST" value="{HTTP_X_FORWARDED_HOST}" />
          </serverVariables>
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

However, when running with the deployed version we will encounter a HTTP 500 Internal Server Error due to the `web.config` definition being invalid. The config is invalid due to permissions not being granted to the IIS site to rewrite the header server variables.

The permissions can be configured by creating an `applicationHost.xdt` file with the required [XML transformations][xdt-transforms] to allow our `web.config` rewrite configurations to be valid.

This file needs to be placed into the the `/site/` folder (one level up from the `wwwroot` folder) which can be done through the Kudu console.

```xml
<?xml version="1.0"?>
<configuration xmlns:xdt="http://schemas.microsoft.com/XML-Document-Transform">
  <system.webServer>
    <rewrite>
      <allowedServerVariables>
        <add name="HTTP_HOST" xdt:Transform="InsertIfMissing" />
        <add name="HTTP_X_FORWARDED_HOST" xdt:Transform="InsertIfMissing" />
      </allowedServerVariables>
    </rewrite>
  </system.webServer>
</configuration>
```

## Additional Note

When using Azure App Service with multiple [Deployment Slots][deployment-slot] be sure to place the `applicationHost.xdt` into each slot!

[front-door-headers]: https://learn.microsoft.com/en-us/azure/frontdoor/front-door-http-headers-protocol#from-the-front-door-to-the-backend
[asp-net-core-forwarded-headers]: https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/proxy-load-balancer
[xdt-transforms]: https://github.com/projectkudu/kudu/wiki/Xdt-transform-samples#add-an-allowedservervariables
[deployment-slot]: https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots