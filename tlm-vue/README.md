[![npm](https://img.shields.io/npm/v/tlm-vue?color=blue)](https://www.npmjs.com/package/tlm-vue)

# The Liberation Machine - Vue

## Publish package

1. Build your core stencil package.
2. Run build on this package.
3. Publish.

## Use in Vue

Import the library plugin in the `main.js` file:

```JavaScript
import { TlmComponents } from 'tlm-vue';

createApp(App).use(TlmComponents).mount('#app');
```
You can then use your components within vue:

```Vue
<template>
  <mw-button test-id="test-id" label="Press here" />
</template>

<script>
import { TlmButton } from 'tlm-vue';

export default {
  name: 'HelloWorld',
  components: {
    TlmButton
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