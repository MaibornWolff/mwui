![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
![Pipeline](https://github.com/MaibornWolff/tlm-components/actions/workflows/update-tokens.yml/badge.svg)
[![npm](https://img.shields.io/npm/v/tlm-stencil?color=blue)](https://www.npmjs.com/package/tlm-stencil)
[![Storybook](https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg?sanitize=true)](maibornwolff.github.io/tlm-components/)

# The Liberation Machine - Component Library

A web component library which uses Figma's token plugin to create easily modifiable design systems.

## Related Docs

- [Token-Farm](tlm-token-farm/README.md)
- [Stencil Library](tlm-stencil/README.md)
- [React Library](tlm-react/README.md)
- [Setup Figma Token Plugin](token-plugin.md)

---
## The Design System Pipeline

All of the Components are developed based on the TLM Design System in Figma. We use `Design Tokens` to version and synchronize design decisions between the Design and the WebComponents.

The [Token-Farm](tlm-token-farm/README.md) module transforms any changes in the Design Tokens into Style Dictionary outputs which are linked to the respective WebComponent.

You can find all relevant build steps in the [Github Workflow](./.github/workflows/update-tokens.yml).

## Components

The Component Library is built with [StencilJs](https://stenciljs.com/). It provides WebComponents as well as framework-specific integrations to leverage usage of WebComponents in React, Vue and Angular.

### Creation

To create new components, run:

```bash
npm run generate
```

Alternatively you can manually create components by adding them to `src/components`.

Custom Element names are written in kebab-case, prefixed with `tlm-` (e.g. `tlm-button`).

### Structure

Name, stylesheet and whether a shadow-dom should be created is defined within `@component`.

Individual props get defined within by using `@Prop()`,
followed by the name of the prop and its type or the default value.
Operators such as `!` or `?` can be used to mark a prop as optional or required.

The HTML structure of the component is defined within the `render()` function. You can define `slots`
which can be inserted into the component.

### Testing

To run the unit tests for the components, run:

```bash
npm test
```

Check stencil docs [here](https://stenciljs.com/docs/my-first-component) for additional help.

---

## Publishing and usage in frameworks

_NOT YET PUBLISHED_

### 1. Publish WebComponent Library

To convert the component library into an NPM package, run:

```bash
npm run build
```

Then, publish to NPM by running:

```bash
npm version major | minor | patch
npm publish
```

### 2. Publish framework-specific WebComponent Libraries

Perform step 1) and update version of `tlm-components` in `tlm-react`.

```bash
# in framework-specific directory, e.g. tlm-react
npm run build
```

Then, publish to NPM by running:

```bash
# in framework-specific directory, e.g. tlm-react
npm version major | minor | patch
npm publish
```

### Usage in React

To leverage the usage of our WebComponents we provide framework-specific wrappers. For React you can install and use the TLM Components via

```bash
npm i tlm-react
```

### Alternative: Import pure WebComponents

To install the library within the chosen framework, run:

```bash
npm i tlm-stencil
```

Include the following in the `main.js` (e.g. Angular, Vue) or `index.js` (e.g. React):

```JavaScript
import { defineCustomElements } from "tlm-stencil/loader";
defineCustomElements(window);
```

All available components should now be usable within the framework.

### Required fixes

#### Angular

To enable support for web components in Angular, add the following to the `@NgModule` in `app.module.ts`:

```TypeScript
schemas: [CUSTOM_ELEMENTS_SCHEMA];
```

#### Vue

Vue will throw a deprecation error if `slots` are used. This is due to `eslint` misidentifying the slots as outdated Vue 2
syntax.

To disable the error, add the following under `eslintConfig` within the `package.json`:

```json
"rules": {
    "vue/no-deprecated-slot-attribute": "off"
}
```
