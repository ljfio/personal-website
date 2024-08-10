---
title: Supporting Keyed Services
description: Choosing the correct properties to open
published: 2024-08-10T09:24:10+01:00
tags: ['dotnet']
---

Have you ever encountered the following `InvalidOperationException` in your .NET solution when using keyed services?

> This service descriptor is keyed. Your service provider may not support keyed services.

This exception might be thrown when an `IServiceProvider` or some code accesses the incorrect properties on an `ServiceDescriptor` .

## Accessing the Correct Properties

To resolve this, Microsoft introduced a range of additional properties that must be accessed instead of their non-keyed `ServiceDescriptor` counterparts:

- `KeyedImplementationFactory` over `ImplementationFactory`
- `KeyedImplementationInstance` over `ImplementationInstnace`
- `KeyedImplementationType` over `ImplementationType`

To determine which property to access there is an `IsKeyedService` property which is `true` when the service has been registered in the `IServiceCollection` as a keyed service.

```csharp
var implementationType = service.IsKeyedService ? service.KeyedImplementationType : service.ImplementationType;
```

## Building Keyed Service Providers

If you are a service provider developer, you may need to consider implementing the above and storing the descriptors in a way that allows you to look up by key and service type.

In addition implement the new interface `IKeyedServiceProvider` and it’s associated methods for retrieving services using a key. Note the key provided is an object type.

```csharp
interface IKeyedServiceProvider : IServiceProvider
{
    GetKeyedService(Type, Object);
    GetRequiredKeyedService(Type, Object);
}
```