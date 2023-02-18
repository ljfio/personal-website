---
title: Nuxt + Tailwind Dark Mode
description: Turn off the lights the easy way
published: 2021-11-03 20:47:00
tags: ['vue', 'nuxt', 'tailwind']
---

While giving my personal website a much overdue visual refresh late into the night, my eyes strained at the clean bright white design I'd chosen. As a developer who typically uses a dark theme in my IDE, should I also switch my website to be the same? Or could it be possible to use a different theme based on the user's preferred choice?

## Use `@Media` Queries

Most modern browsers (released within the last 2 years) support the [`prefers-color-scheme`][media-query] CSS `@media` query, which allows you to easily detect when the user prefers `light` or `dark` mode when they are browsing.

```css
body {
    background-color: #E5E5E5;
    color: #050505;
}

@media (prefers-color-scheme: dark) {
    body {
        background-color: #050505;
        color: #E5E5E5;
    }
}
```

## Framework Support

Within [Tailwind][tailwind], the UI framework I used to style my website, variants are provided for each of the colour classes. Using the `dark:` prefix added to the class you wish to use. Since I use [Nuxt][nuxt] (a fantastic [Vue][vue] framework), it is possible to add a global `<body>` tag-level class by setting the  `head.bodyAttrs.class` property in the `nuxt.config.js` file.

```js
export default {
    head: {
        bodyAttrs: {
            class: "bg-gray-100 dark:bg-gray-900",
        },
    },
}
```

[media-query]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
[tailwind]: https://tailwindcss.com
[nuxt]: https://nuxtjs.org
[vue]: https://vuejs.org