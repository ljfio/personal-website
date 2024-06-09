---
title: Your Helper Needs View Context
description: HTML from ASP .NET View Components without using View()
published: 2024-05-19T09:33:47+01:00
tags: ['dotnet', 'aspnet', 'umbraco']
---

When building Umbraco websites recently, instead of calling the `GetBlockListHtmlAsync()` extension method on an `IHtmlHelper`, we have been experimenting with the use of a `ViewComponent` to render out each of the content blocks built for a site.

This approach requires an additional step to wire up the `ViewContext` which is holding key pieces of information (such as the `ViewBag` and `ViewData`) for the currently rendering `ViewComponent`.

Whenever you programmatically call a method like `PartialAsync()` the `IHtmlHelper` must be made aware of its currently executing `ViewContext`.

This can be done via a lesser known method `Contextualize()` that exists on the `IViewContextAware` interface. This interface is implemented on both the concrete types for `IHtmlHelper` and `IViewComponentHelper`.

## Partial Views via `IHtmlHelper`

Want to call an existing partial view file from within a `ViewComponent` that wasn't in the components view folders?

Note that you have to check the type cast for `IHtmlHelper` to `IViewContextAware`. This is due to the former interface not inheriting from latter.


```csharp
public class Example1ViewComponent : ViewComponent
{
    private readonly IHtmlHelper _htmlHelper;

    public Example1ViewComponent(IHtmlHelper htmlHelper)
        => _htmlHelper = htmlHelper;

    public async Task<IViewComponentResult> InvokeAsync(ExampleModel model)
    {
        if (_htmlHelper is IViewContextAware viewContextAware)
            viewContextAware.Contextualize(ViewContext);

        var htmlContent = await _htmlHelper.PartialAsync("ExamplePartial.cshtml", model);

        return new HtmlContentViewComponentResult(htmlContent);
    }
}
```

The output from a method like `PartialAsync()` is `IHtmlContent`, which must be wrapped in a type that the `Invoke()` / `InvokeAsync()` methods on a `ViewComponent` produce.

For this Microsoft provide the `HtmlContentViewComponentResult` class which accepts the `IHtmlContent` as a constructor argument. Unfortunately there is no nice helper method like `View()` or `Content()` on a `ViewComponent` but you could create an extension method to achieve this.

```csharp
public static class ViewComponentExtensions
{
    public static IViewComponentResult HtmlContent(this ViewComponent viewComponent, IHtmlContent htmlContent) =>
        new HtmlContentViewComponentResult(htmlContent);
}
```

## View Components via  `IViewComponentHelper`

You can also do the same for calling other `ViewComponent` that you have created within your solution.

```csharp
public class Example2ViewComponent : ViewComponent
{
    private readonly IViewComponentHelper _viewComponentHelper;

    public Example2ViewComponent(IViewComponentHelper viewComponentHelper)
        => _viewComponentHelper = viewComponentHelper;

    public async Task<IViewComponentResult> InvokeAsync(ExampleModel model)
    {
        if (_viewComponentHelper is IViewContextAware viewContextAware)
            viewContextAware.Contextualize(ViewContext);

        var htmlContent = await _viewComponentHelper.InvokeAsync(typeof(Example1ViewComponent), new {
            model,
        });

        return new HtmlContentViewComponentResult(htmlContent);
    }
}
```