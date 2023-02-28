# mw-dropdown

<!-- Auto Generated Below -->

## Properties

| Property      | Attribute     | Description                                                                                  | Type               | Default         |
| ------------- | ------------- | -------------------------------------------------------------------------------------------- | ------------------ | --------------- |
| `disabled`    | `disabled`    | Visually and functionally disabled input                                                     | `boolean`          | `false`         |
| `hasError`    | `has-error`   | Use to display input and helper-text in error state                                          | `boolean`          | `false`         |
| `helperText`  | `helper-text` | HelperText to be displayed. Can be used as hint or error text when combined with `has-error` | `string`           | `undefined`     |
| `inline`      | `inline`      | Display label and input horizonally                                                          | `boolean`          | `false`         |
| `label`       | `label`       | Label to be displayed                                                                        | `string`           | `undefined`     |
| `name`        | `name`        | input field name                                                                             | `string`           | `undefined`     |
| `placeholder` | `placeholder` | Placeholder to be displayed                                                                  | `string`           | `"Placeholder"` |
| `required`    | `required`    | Mark input as required                                                                       | `boolean`          | `false`         |
| `value`       | `value`       | input field value                                                                            | `number \| string` | `undefined`     |
| `valueLabel`  | `value-label` | label of selected input value                                                                | `number \| string` | `undefined`     |

## Events

| Event          | Description                                  | Type                  |
| -------------- | -------------------------------------------- | --------------------- |
| `valueChanged` | MwDropdown emits an event when value changes | `CustomEvent<string>` |

## Dependencies

### Depends on

- [mw-popover](../mw-popover)
- [mw-icon](../mw-icon)
- [mw-helper-text](../mw-helper-text)

### Graph

```mermaid
graph TD;
  mw-dropdown --> mw-popover
  mw-dropdown --> mw-icon
  mw-dropdown --> mw-helper-text
  style mw-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
