# mw-button



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute  | Description                                   | Type                                         | Default     |
| --------------------- | ---------- | --------------------------------------------- | -------------------------------------------- | ----------- |
| `disabled`            | `disabled` | Visually and functionally disable button      | `boolean`                                    | `undefined` |
| `href`                | `href`     | If provided the button will act as a link     | `string`                                     | `undefined` |
| `label`               | `label`    | Label to be displayed                         | `string`                                     | `undefined` |
| `target`              | `target`   | If using href the target prop can be provided | `"_blank" \| "_parent" \| "_self" \| "_top"` | `'_self'`   |
| `testId` _(required)_ | `test-id`  | Must be provided for automated testing        | `string`                                     | `undefined` |
| `variant`             | `variant`  | Button variants                               | `"filled" \| "ghost" \| "outline"`           | `'filled'`  |


## Events

| Event          | Description                                                                              | Type                  |
| -------------- | ---------------------------------------------------------------------------------------- | --------------------- |
| `clickEmitter` | 'onClick' event is fired when clicking the button, unless it is used with a `href` prop. | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
