[![npm](https://img.shields.io/npm/v/tlm-stencil?color=blue)](https://www.npmjs.com/package/tlm-stencil)

# The Liberation Machine - Stencil

`tlm-stencil` houses the component library of the Liberation Machine and is built using [StencilJs](https://stenciljs.com/).
Stencil provides WebComponents as well as framework-specific integrations to leverage usage of WebComponents in React, Vue and Angular.

### Creation

To create new components, run:

```bash
npm run generate
```

Alternatively you can manually create components by adding them to `src/components`.

Custom Element names are written in kebab-case, prefixed with `mw-` (e.g. `mw-button`).

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