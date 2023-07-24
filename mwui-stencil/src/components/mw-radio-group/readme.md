# mw-radio-group

<!-- Auto Generated Below -->

## Properties

| Property    | Attribute   | Description                              | Type                                                                                                                             | Default                      |
| ----------- | ----------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `direction` | `direction` | Dictates the flex direction of the group | `LayoutDirectionEnum.COLUMN \| LayoutDirectionEnum.COLUMN_REVERSE \| LayoutDirectionEnum.ROW \| LayoutDirectionEnum.ROW_REVERSE` | `LayoutDirectionEnum.COLUMN` |
| `value`     | `value`     | Current value of the radio-group         | `number \| string`                                                                                                               | `undefined`                  |
| `wrap`      | `wrap`      | Dictates whether group should flex-wrap  | `boolean`                                                                                                                        | `false`                      |

## Events

| Event         | Description                                                         | Type                                         |
| ------------- | ------------------------------------------------------------------- | -------------------------------------------- |
| `radioChange` | Event emitted when radioGroup value changes (after radio selection) | `CustomEvent<{ value?: string \| number; }>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
