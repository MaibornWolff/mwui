# mw-checkbox

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute  | Description                                     | Type      | Default     |
| ---------- | ---------- | ----------------------------------------------- | --------- | ----------- |
| `checked`  | `checked`  | Whether input is checked                        | `boolean` | `false`     |
| `disabled` | `disabled` | Whether input is disabled                       | `boolean` | `false`     |
| `label`    | `label`    | Label to be displayed                           | `string`  | `undefined` |
| `name`     | `name`     | Name of checkbox input                          | `string`  | `undefined` |
| `testId`   | `test-id`  | Provide unique identifier for automated testing | `string`  | `undefined` |
| `value`    | `value`    | Value of checkbox input                         | `string`  | `undefined` |

## Events

| Event     | Description                                                      | Type               |
| --------- | ---------------------------------------------------------------- | ------------------ |
| `emitter` | MwCheckbox emits an event when checkbox checked state is changed | `CustomEvent<any>` |

## Dependencies

### Depends on

- [mw-icon](../mw-icon)

### Graph

```mermaid
graph TD;
  mw-checkbox --> mw-icon
  style mw-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
