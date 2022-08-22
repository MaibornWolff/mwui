![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# The Liberation Machine - Component Library

➜ [Token Farm documentation](token-farm/readme.md)

A web component library which uses Figma's token plugin to create easily modifiable design systems.

## Token Plugin

The component library uses Figma design tokens to style the components based on a Figma file.

### Get started

Download the plugin from [here](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens) and initiate it in the Figma file which contains the design system. Under settings, select _GitHub_ as the token storage option. To sync your tokens with GitHub you will first have to enter your credentials. The following information is required:

**Your Name:** First and last name.

**Personal access token:** The plugin requires a token which is connected to your GitHub account (An account is required to use the plugin). You can create a token within the GitHub settings under Settings > Personal access tokens > Generate new token. Give the token a name and set its expiration date to 'No expiration'. The following boxes have to be checked for the plugin to work:

![image](https://user-images.githubusercontent.com/85286401/185928119-59c2ce2b-cc80-44a0-b629-70c38c184600.png)

Generate the access token and paste it into the plugin settings. *Do not share this token with anybody!*

**Repository:** MaibornWolff/tlm-components

**Default Branch:** develop

**File Path:** token-farm/input/tokens.json

After saving the settings you can pull the tokens from GitHub using the button in the bottom left corner.

### Pushing to GitHub

After making changes to the Figma file (while using design tokens) you can push said changes to GitHub using the plugin. 

Click on the 'Push to GitHub' button in the bottom left corner. Make the sure that 'develop' is the selected branch. You have to enter a short message for every commit you push to GitHub. These messages should look like this:

```
figma-plugin - change border-radius of buttons to none
```

The message should be in English and serve as a quick description of what changes were made to the tokens. The 'figma-plugin - ' prefix makes it easier to understand which commits were made using the plugin. 

___

## Components

### Creation

To create new components, run:

```bash
npm run generate
```

Alternatively you can manually create components by adding them to `src/components`.

_NOT FINAL_ Component names are written in dash-case and start with `tlm-` (e.g. `tlm-button`).

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

### Convert to package

To convert the component library into an NPM package, run:

```bash
npm run build
```

Then, publish to NPM by running:

```bash
npm version major | minor | patch
npm publish
```

### Import into framework

To install the library within the chosen framework, run:

```bash
npm i tlm-components
```

Include the following in the `main.js` (e.g. Angular, Vue) or `index.js` (e.g. React):

```JavaScript
import { defineCustomElements } from "tlm-components/loader";
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
