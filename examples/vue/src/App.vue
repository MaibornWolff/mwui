<script>
import { MwButton, MwCard, MwCardBody } from '@maibornwolff/mwui-vue';

export default {
  components: {
    MwButton,
    MwCard,
    MwCardBody
  },
};
</script>

<template>
  <div id="app">
    <mw-button test-id="asdf" label="Button"></mw-button>
    <mw-card><mw-card-body>Card Body</mw-card-body></mw-card>
  </div>
</template>
