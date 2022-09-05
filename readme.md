![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
![Pipeline](https://github.com/MaibornWolff/tlm-components/actions/workflows/update-tokens.yml/badge.svg)
[![npm](https://img.shields.io/npm/v/tlm-stencil?color=blue)](https://www.npmjs.com/package/tlm-stencil)
[![Storybook](https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg?sanitize=true)](https://maibornwolff.github.io/tlm-components)

# The Liberation Machine - Component Library

A web component library which uses Figma's token plugin to create easily modifiable design systems.

## Related Docs

- [Token-Farm](tlm-token-farm/README.md)
- [Stencil Library](tlm-stencil/README.md)
- [React Library](tlm-react/README.md)
- [Vue Library](tlm-vue/README.md)
- [Angular Library](tlm-angular/README.md)
- [Setup Figma Token Plugin](token-plugin.md)

---
## The Design System Pipeline

All the Components are developed based on the TLM Design System in Figma. We use `Design Tokens` to version and synchronize design decisions between the Design and the WebComponents.

The [Token-Farm](tlm-token-farm/README.md) module transforms any changes in the Design Tokens into Style Dictionary outputs which are linked to the respective WebComponent.

You can find all relevant build steps in the [GitHub Workflow](./.github/workflows/update-tokens.yml).

---

## Publishing and usage in frameworks

_NOT YET PUBLISHED_

### 0. Versioning

Prior to publishing every update needs to be versioned based on these guidelines:

<table>
<thead>
  <tr>
    <th colspan="4">Versioning Guide</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><b>Type</b></td>
    <td><b>major</b></td>
    <td><b>minor</b></td>
    <td><b>patch</b></td>
  </tr>
  <tr>
    <td><b>Example</b></td>
    <td><b>2</b>.0.0</td>
    <td>1.<b>2</b>.0</td>
    <td>1.0.<b>2</b></td>
  </tr>
  <tr>
    <td><b>Rule</b></td>
    <td>Breaking changes, such as fundamental reworks of existing components.</td>
    <td>Larger changes, such as the addition of new components or props</td>
    <td>Minor adjustments, like bug fixes or style adjustments</td>
  </tr>
</tbody>
</table>

All tlm packages need to be on the same version, meaning if `tlm-stencil`'s version increases the versions of `tlm-react`, `tlm-vue` and `tlm-angular` need to be updated as well. 

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

### Usage in React, Vue and Angular

To leverage the usage of our WebComponents we provide framework-specific wrappers for React, Vue and Angular. You can install and use the TLM Components accordingly:

```bash
npm i tlm-react     # in React

npm i tlm-vue       # in Vue

npm i tlm-angular   # in Angular
```

For more info on the individual wrappers, check out the [React](tlm-react/README.md), [Vue](tlm-vue/README.md) or [Angular](tlm-angular/README.md) documentation.

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
