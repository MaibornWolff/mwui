# mw-popover

<!-- Auto Generated Below -->

## Properties

| Property       | Attribute        | Description                                                   | Type                                                                                                                                                                 | Default     |
| -------------- | ---------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `closeOnClick` | `close-on-click` | Closes Popover when user clicks on it                         | `boolean`                                                                                                                                                            | `false`     |
| `dismissable`  | `dismissable`    | If set to true, the popover can be closed by clicking outside | `boolean`                                                                                                                                                            | `false`     |
| `name`         | `name`           | Name used internally to reference anchor and content elements | `string`                                                                                                                                                             | `"tooltip"` |
| `noPadding`    | `no-padding`     | disable default padding                                       | `boolean`                                                                                                                                                            | `false`     |
| `open`         | `open`           | Whether the popover is visible                                | `boolean`                                                                                                                                                            | `undefined` |
| `placement`    | `placement`      | Placement relative to anchor element                          | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `"bottom"`  |
| `testId`       | `test-id`        | Provide unique identifier for automated testing               | `string`                                                                                                                                                             | `undefined` |

## Events

| Event         | Description                                                      | Type               |
| ------------- | ---------------------------------------------------------------- | ------------------ |
| `openEmitter` | MwPopover emits an event when the value of the open prop changes | `CustomEvent<any>` |

## Dependencies

### Used by

- [mw-dropdown](../mw-dropdown)
- [mw-menu](../mw-menu)
- [mw-textfield](../mw-textfield)

### Graph

```mermaid
graph TD;
  mw-dropdown --> mw-popover
  mw-menu --> mw-popover
  mw-textfield --> mw-popover
  style mw-popover fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
