# App Fair web site

This is the source for the [appfair.org](https://appfair.org) home page
It is implemented with Astro and Starlight.

## Contribution Guide

We appreciate contributions to the documentation in the form
of [PRs](https://github.com/appfair/fairapps.github.io/pulls). The
simplest way to make a contribution for a particular
page you see on the site is to scroll to the bottom of the
page and click the "Edit this page" link, which will
automatically bring you into this repository's editor
for that page. Larger edits that span multiple pages
might instead warrant forking this repository and
checking it out locally to make changes.

## Running locally

For large-scale changes that you want to be able to preview before
contributing, you can run this site locally.
The site uses Astro and Starlight as a static site generator,
which is then distributed through GitHub Pages.

See the [Starlight docs](https://starlight.astro.build/) and
[Astro documentation](https://docs.astro.build) to learn
more, but in general to preview changes locally, you should be able to
just run:

```console
npm run dev
```

Before contributing, be sure to run a full production build,
which will run the link checker and other validations:

```console
npm run build
```


### Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Project Structure

Following is an abbreviated outline of the structure of the
documentation folders and files:

```
.
├── astro.config.mjs
├── LICENSE.txt
├── package-lock.json
├── package.json
├── public
│   └── favicon.svg
├── README.md
├── src
│   ├── assets
│   │   └── favicon.png
│   ├── components
│   │   └── CustomHeader.astro
│   ├── content
│   │   ├── docs
│   │   │   ├── blog
│   │   │   ├── docs
│   │   │   ├── index.mdx
│   │   │   ├── sponsor
│   │   │   └── tour
│   │   ├── i18n
│   │   │   ├── fr.json
│   │   │   └── zh-cn.json
│   │   └── tour-collection
│   │       ├── introduction.mdx
│   │       └── teaser.mdx
│   ├── content.config.ts
│   ├── pages
│   │   └── example.astro
│   ├── routeData.ts
│   └── styles
│       └── custom.css
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.


## License

The App Fair Project © 2026 by <a href="https://appfair.org">the App Fair</a> is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>


