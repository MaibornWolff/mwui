[![npm](https://img.shields.io/npm/v/@maibornwolff/mwui-vue?color=blue)](https://www.npmjs.com/package/@maibornwolff/mwui-vue)

# The Liberation Machine
## MWUI - Vue Integration

### Get started

Import the library plugin in the `main.js` file:

```bash
npm i @maibornwolff/mwui-stencil
npm i @maibornwolff/mwui-vue
```

```JavaScript
import { MwuiComponents } from '@maibornwolff/mwui-vue';
import '@maibornwolff/mwui-stencil/dist/mwui-stencil/mwui-stencil.css';

createApp(App).use(MwuiComponents).mount('#app');
```

You can then use your components within vue:

```Vue
<template>
  <mw-button test-id="test-id" label="Press here" />
</template>

<script>
import { MwButton } from '@maibornwolff/mwui-vue';

export default {
  name: 'HelloWorld',
  components: {
    MwButton
  }
}
```

### Known Issues

Vue will throw a deprecation error if `slots` are used. This is due to `eslint` misidentifying the slots as outdated Vue 2
syntax.

To disable the error, add the following under `eslintConfig` within the `package.json`:

```json
"rules": {
    "vue/no-deprecated-slot-attribute": "off"
}
```