# mw-switch

<!-- Auto Generated Below -->

## Properties

| Property        | Attribute        | Description                                                            | Type                                      | Default              |
| --------------- | ---------------- | ---------------------------------------------------------------------- | ----------------------------------------- | -------------------- |
| `checked`       | `checked`        | Switch state                                                           | `boolean`                                 | `false`              |
| `disabled`      | `disabled`       | Visually and functionally disable switch                               | `boolean`                                 | `undefined`          |
| `label`         | `label`          | Fixed label to be displayed next to the toggle switch                  | `string`                                  | `undefined`          |
| `labelPosition` | `label-position` | Dictates on which side of checkbox the label is placed                 | `PositionEnum.LEFT \| PositionEnum.RIGHT` | `PositionEnum.RIGHT` |
| `name`          | `name`           | Name of switch input                                                   | `string`                                  | `undefined`          |
| `off`           | `off`            | Label to be shown when switch state is unchecked. Overrides label prop | `string`                                  | `undefined`          |
| `on`            | `on`             | Label to be shown when switch state is checked. Overrides label prop   | `string`                                  | `undefined`          |
| `testId`        | `test-id`        | Provide unique identifier for automated testing                        | `string`                                  | `undefined`          |

## Events

| Event     | Description                                               | Type                   |
| --------- | --------------------------------------------------------- | ---------------------- |
| `emitter` | MwSwitch emits an event when switch checked state changes | `CustomEvent<boolean>` |

## Dependencies

### Used by

- [mw-icon-gallery](../mw-icon-gallery)

### Graph

```mermaid
graph TD;
  mw-icon-gallery --> mw-switch
  style mw-switch fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
