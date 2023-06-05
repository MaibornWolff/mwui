<script>
import { MwAutocomplete, MwMenuItem, MwChip, MwLogin, MwCard, MwButton, MwCardFooter, MwCardTitle, MwCardBody, MwIcon } from "@maibornwolff/mwui-vue";
import bg from "../assets/background.jpg";
export default {
    components: {
        MwAutocomplete,
        MwMenuItem,
        MwIcon,
        MwCard,
        MwCardBody,
        MwCardTitle,
        MwCardFooter,
        MwButton,
        MwLogin,
        MwChip,
    },
    data() {
        return {
            selected: ["Pineapple"],
            value: "",
            bg,
            showClose: true,
        };
    },
    methods: {
        onToggle: () => {},
        onSend: () => {},
        onChange: () => {},
        onInput: () => {
            console.log("askkkdf");
        },
    },
};
</script>

<template>
    <div id="app">
        <mw-chip :show-close="showClose"> chip </mw-chip>
        <mw-login headline="Welcome back" :background-image="bg" layout="start" forgot-password-href="/aksddfd" sign-up-href="/askdf" />
        <div class="container">
            <mw-card elevated>
                <mw-card-title text="All about fruits" />
                <mw-card-body>
                    {{ value }}
                    <p>For some reason we're interetsed in you selecting favorites fruits.</p>
                    <mw-autocomplete
                        name="some-items"
                        placeholder=""
                        helper-text="Select Multiple Items"
                        no-suggestions-text="No suggestions found."
                        has-error="false"
                        inline
                        required="false"
                        disabled="false"
                        read-only="false"
                        multiple
                        maximum="2"
                        @input="onInput"
                    >
                        <mw-icon slot="icon-start" icon="search" />
                        <div slot="dropdown-menu">
                            <mw-menu-item text="Pineapple" />
                            <mw-menu-item text="Orange" />
                            <mw-menu-item text="Apple" />
                            <mw-menu-item text="Pear" />
                        </div>
                    </mw-autocomplete>
                </mw-card-body>
                <mw-card-footer>
                    <mw-button variant="filled" label="Send" @click="onSend" />
                </mw-card-footer>
            </mw-card>
        </div>
    </div>
</template>

<style scoped>
#app {
    width: 100vw;
    height: 100vh;
}
.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
