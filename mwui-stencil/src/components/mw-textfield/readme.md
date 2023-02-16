# mw-textfield

<!-- Auto Generated Below -->

## Properties

| Property          | Attribute          | Description                                                                                  | Type                   | Default     |
| ----------------- | ------------------ | -------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| `disabled`        | `disabled`         | Visually and functionally disabled input                                                     | `boolean`              | `false`     |
| `hasError`        | `has-error`        | Use to display input and helper-text in error state                                          | `boolean`              | `false`     |
| `helperText`      | `helper-text`      | HelperText to be displayed. Can be used as hint or error text when combined with `has-error` | `string`               | `undefined` |
| `inline`          | `inline`           | Display label and input horizonally                                                          | `boolean`              | `false`     |
| `label`           | `label`            | Label to be displayed                                                                        | `string`               | `undefined` |
| `multiple`        | `multiple`         | Allows users to enter multiple values into textfield                                         | `boolean`              | `false`     |
| `multipleMaximum` | `multiple-maximum` | Amount of allowed `multipleValues`                                                           | `number`               | `undefined` |
| `multipleValues`  | --                 | Values, when `multiple` is true                                                              | `(string \| number)[]` | `[]`        |
| `name`            | `name`             | input field name                                                                             | `string`               | `undefined` |
| `placeholder`     | `placeholder`      | Placeholder to be displayed                                                                  | `string`               | `undefined` |
| `readOnly`        | `read-only`        | Whether user can't type in input field                                                       | `boolean`              | `false`     |
| `required`        | `required`         | Mark input as required                                                                       | `boolean`              | `false`     |
| `type`            | `type`             | HTML Input type                                                                              | `string`               | `"text"`    |
| `value`           | `value`            | input field value                                                                            | `number \| string`     | `undefined` |

## Events

| Event          | Description                                             | Type                  |
| -------------- | ------------------------------------------------------- | --------------------- |
| `valueChanged` | MwTextfield emits an event when textfield value changes | `CustomEvent<string>` |

## Dependencies

### Used by

- [mw-autocomplete](../mw-autocomplete)
- [mw-icon-gallery](../mw-icon-gallery)
- [mw-login](../mw-login)

### Depends on

- [mw-popover](../mw-popover)
- [mw-chip](../mw-chip)
- [mw-icon](../mw-icon)

### Graph

```mermaid
graph TD;
  mw-textfield --> mw-popover
  mw-textfield --> mw-chip
  mw-textfield --> mw-icon
  mw-chip --> mw-icon
  mw-autocomplete --> mw-textfield
  mw-icon-gallery --> mw-textfield
  mw-login --> mw-textfield
  style mw-textfield fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
