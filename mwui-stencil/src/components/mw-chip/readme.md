# mw-chip

<!-- Auto Generated Below -->

## Properties

| Property    | Attribute    | Description                                                        | Type      | Default     |
| ----------- | ------------ | ------------------------------------------------------------------ | --------- | ----------- |
| `disabled`  | `disabled`   | Visually and functionally disable button                           | `boolean` | `undefined` |
| `icon`      | `icon`       | Name identifier of icon to be displayed in chip                    | `string`  | `undefined` |
| `selected`  | `selected`   | Selection state that changes onToggle. Can be set as mutable prop. | `boolean` | `false`     |
| `showClose` | `show-close` | Flag whether to show close icon or not                             | `boolean` | `false`     |
| `testId`    | `test-id`    | Provide unique identifier for automated testing                    | `string`  | `undefined` |

## Events

| Event     | Description                                                  | Type               |
| --------- | ------------------------------------------------------------ | ------------------ |
| `emitter` | MwChip emits an event when chip is clicked or chip is closed | `CustomEvent<any>` |

## Dependencies

### Depends on

- [mw-icon](../mw-icon)

### Graph

```mermaid
graph TD;
  mw-chip --> mw-icon
  style mw-chip fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
