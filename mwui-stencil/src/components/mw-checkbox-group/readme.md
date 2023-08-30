# mw-checkbox-group

<!-- Auto Generated Below -->

## Properties

| Property      | Attribute      | Description                                                                      | Type                                                                                                                             | Default                      |
| ------------- | -------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `direction`   | `direction`    | Dictates the flex direction of the group                                         | `LayoutDirectionEnum.COLUMN \| LayoutDirectionEnum.COLUMN_REVERSE \| LayoutDirectionEnum.ROW \| LayoutDirectionEnum.ROW_REVERSE` | `LayoutDirectionEnum.COLUMN` |
| `parentLabel` | `parent-label` | Label of parent checkbox                                                         | `string`                                                                                                                         | `undefined`                  |
| `value`       | --             | Current value of the checkbox-group; contains the values of all checked children | `(string \| number)[]`                                                                                                           | `[]`                         |
| `wrap`        | `wrap`         | Dictates whether group should flex-wrap                                          | `boolean`                                                                                                                        | `false`                      |

## Events

| Event            | Description                                                         | Type                                             |
| ---------------- | ------------------------------------------------------------------- | ------------------------------------------------ |
| `checkboxChange` | Event emitted when radioGroup value changes (after radio selection) | `CustomEvent<{ value?: (string \| number)[]; }>` |

## Dependencies

### Depends on

- [mw-checkbox](../mw-checkbox)

### Graph

```mermaid
graph TD;
  mw-checkbox-group --> mw-checkbox
  mw-checkbox --> mw-icon
  style mw-checkbox-group fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
