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

## Shadow Parts

| Part           | Description |
| -------------- | ----------- |
| `"icon-end"`   |             |
| `"icon-start"` |             |

## Dependencies

### Used by

- [mw-autocomplete](../mw-autocomplete)
- [mw-icon-gallery](../mw-icon-gallery)
- [mw-login](../mw-login)

### Depends on

- [mw-helper-text](../mw-helper-text)

### Graph

```mermaid
graph TD;
  mw-textfield --> mw-helper-text
  mw-autocomplete --> mw-textfield
  mw-icon-gallery --> mw-textfield
  mw-login --> mw-textfield
  style mw-textfield fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
