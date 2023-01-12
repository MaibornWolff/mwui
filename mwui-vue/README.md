[![npm](https://img.shields.io/npm/v/mwui-vue?color=blue)](https://www.npmjs.com/package/mwui-vue)

# The Liberation Machine - Vue

## Publish package

1. Build your core stencil package.
2. Run build on this package.
3. Publish.

## Use in Vue

Import the library plugin in the `main.js` file:

```JavaScript
import { MwuiComponents } from 'mwui-vue';

createApp(App).use(MwuiComponents).mount('#app');
```
You can then use your components within vue:

```Vue
<template>
  <mw-button test-id="test-id" label="Press here" />
</template>

<script>
import { MwuiButton } from 'mwui-vue';

export default {
  name: 'HelloWorld',
  components: {
    MwuiButton
  }
}
```

## Known Issues

Vue will throw a deprecation error if `slots` are used. This is due to `eslint` misidentifying the slots as outdated Vue 2
syntax.

To disable the error, add the following under `eslintConfig` within the `package.json`:

```json
"rules": {
    "vue/no-deprecated-slot-attribute": "off"
}
```