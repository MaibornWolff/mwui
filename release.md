
# Build & Release

> **Note**
> This is a work-in-progress version of the our release process.

> **Warning**
> Before releasing a new version, make sure the changes are fine and also do not break existing components. Do so by running stencil in dev-mode, starting Storybook locally after having built mwui-stencil and push your changes to main (will automatically deploy to [mwui-dev](https://maibornwolff.github.io/mwui-dev))

To create a public build of the Web Components follow these steps:

1) Make sure you pulled the most recent changes of the `main` branch.
2) Run `npm run build-tokens` to ensure the token transformation output is up to date
3) (QA) start the dev server and check for errors `npm run start`
4) Build the library using `npm run build-stencil`. (This will update the framework integrations but not create a build of those!)

## Publish Web Component Library

```bash
npm run version:{major | minor | patch}
npm publish --access public
```

## Build & publish framework-specific Web Component Integrations

1) Make sure `mwui-stencil` is built and published in a next version (see above).
2) Update to the lastest version of `@maibornwolff/mwui-stencil` in the respective integration package.json (e.g. `mwui-react`)
3) Create framework-specific build:

```bash
# in framework-specific directory, e.g. mwui-react
npm run build
```

Then, publish to npm by running:

```bash
# in framework-specific directory, e.g. mwui-react
npm publish --access public
```

## Create release Tag

If not already created by npm version command, create a new version tag `v{major}.{minor}.{patch}` and push it together with the commits resulting from the steps above to main.
> **Warning**
> Pushing a Tag in that format will trigger the release workflow in Github which creates a new build of the library and Storybook. This should match the published version of the component library.
