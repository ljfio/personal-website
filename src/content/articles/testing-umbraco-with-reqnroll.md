---
title: Testing Umbraco with Reqnroll
description:
published: 2025-03-30T22:23:08+01:00
tags: ['umbraco', 'testing', 'bdd']
---

Previously I wrote a [24 Days in Umbraco][24-days-article] article on how to test your Umbraco solutions with [SpecFlow][specflow-archived], a free open-source Behaviour Driven Development (BDD) framework.

Unfortunately, as of 31st December 2024, SpecFlow was made end of life by Tricentis making my article obsolete. How fast things change in the .NET ecosystem these days!

If I was looking to add BDD testing to my Umbraco solution today, how would I do it?

## Introducing Reqnroll

[Reqnroll][reqnroll] is a fork of SpecFlow maintained by one of the original creators.

This works as a drop-in replacement, allowing you to use all of the great BDD features that SpecFlow offered for testing your project.

To get started with Reqnroll on a new project, use the following commands to setup a new testing project in your solution.

```powershell
dotnet new install Reqnroll.Templates.DotNet
dotnet new reqnroll-project -o MyProject.Specs -f net8.0 -t xunit

dotnet sln add MyProject.Specs

dotnet add MyProject.Specs reference MyProject.Web
```

Most steps in my [original article][24-days-article] would still apply, just string replace `SpecFlow.*` with `Reqnroll.*`.

However for existing projects, there's a great [guide][reqnroll-migration] on how to do the migration in the Reqnroll documentation.

[24-days-article]: https://24days.in/umbraco-cms/2023/testing-umbraco/
[specflow-archived]: https://web.archive.org/web/20241014133825/https://specflow.org/
[specflow-eol]: https://support-hub.tricentis.com/open?number=NEW0001432&id=post
[reqnroll]: https://reqnroll.net/
[reqnroll-migration]: https://docs.reqnroll.net/latest/guides/migrating-from-specflow.html