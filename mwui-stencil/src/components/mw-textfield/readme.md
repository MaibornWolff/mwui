# mw-textfield

<!-- Auto Generated Below -->

## Properties

| Property      | Attribute     | Description                                                                                  | Type               | Default     |
| ------------- | ------------- | -------------------------------------------------------------------------------------------- | ------------------ | ----------- |
| `disabled`    | `disabled`    | Visually and functionally disabled input                                                     | `boolean`          | `false`     |
| `hasError`    | `has-error`   | Use to display input and helper-text in error state                                          | `boolean`          | `false`     |
| `helperText`  | `helper-text` | HelperText to be displayed. Can be used as hint or error text when combined with `has-error` | `string`           | `undefined` |
| `inline`      | `inline`      | Display label and input horizonally                                                          | `boolean`          | `false`     |
| `label`       | `label`       | Label to be displayed                                                                        | `string`           | `undefined` |
| `name`        | `name`        | input field name                                                                             | `string`           | `undefined` |
| `placeholder` | `placeholder` | Placeholder to be displayed                                                                  | `string`           | `undefined` |
| `readOnly`    | `read-only`   | Whether user can't type in input field                                                       | `boolean`          | `false`     |
| `required`    | `required`    | Mark input as required                                                                       | `boolean`          | `false`     |
| `type`        | `type`        | HTML Input type                                                                              | `string`           | `"text"`    |
| `value`       | `value`       | input field value                                                                            | `number \| string` | `undefined` |

## Events

| Event          | Description                                             | Type                  |
| -------------- | ------------------------------------------------------- | --------------------- |
| `valueChanged` | MwTextfield emits an event when textfield value changes | `CustomEvent<string>` |

## Dependencies

### Used by

- [mw-icon-gallery](../mw-icon-gallery)

### Depends on

- [mw-popover](../mw-popover)
- [mw-icon](../mw-icon)

### Graph

```mermaid
graph TD;
  mw-textfield --> mw-popover
  mw-textfield --> mw-icon
  mw-icon-gallery --> mw-textfield
  style mw-textfield fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
