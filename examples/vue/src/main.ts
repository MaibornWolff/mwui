import { createApp } from 'vue';
import { MwuiComponents } from '@maibornwolff/mwui-vue';
import App from './App.vue';

import '@maibornwolff/mwui-stencil/dist/mwui-stencil/mwui-stencil.css';

createApp(App).use(MwuiComponents).mount('#app');
