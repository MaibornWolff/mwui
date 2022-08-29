import { defineContainer } from './vue-component-lib/utils';
export const MyComponent = defineContainer('my-component', undefined, [
    'first',
    'middle',
    'last'
]);
export const TlmButton = defineContainer('tlm-button', undefined, [
    'testId',
    'disabled',
    'clickEmitter'
]);
//# sourceMappingURL=components.js.map