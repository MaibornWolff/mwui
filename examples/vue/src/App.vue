<script>
import { MwAutocomplete, MwMenuItem, MwLogin, MwCard, MwButton, MwCardFooter, MwCardTitle, MwCardBody, MwIcon } from "@maibornwolff/mwui-vue";
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
    },
    data() {
        return {
            selected: ["Pineapple"],
            value: "",
            bg,
        };
    },
    methods: {
        onSend: () => {},
        onChange: () => {},
        onInput: () => {
            console.log("asdf");
        },
    },
};
</script>

<template>
    <div id="app">
        <mw-login headline="Welcome back" :background-image="bg" layout="start" forgot-password-href="/aksdfd" sign-up-href="/askdf" />
        <div class="container">
            <mw-card elevated>
                <mw-card-title text="All about fruits"></mw-card-title>
                <mw-card-body>
                    {{ value }}
                    <p>For some reason we're interetsed in you selecting favorites fruits.</p>
                    <mw-autocomplete
                        @input="onInput"
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
                        maximumText=""
                        option-counter=""
                    >
                        <mw-icon slot="icon-start" icon="search"></mw-icon>
                        <div slot="dropdown-menu">
                            <mw-menu-item text="Pineapple"></mw-menu-item>
                            <mw-menu-item text="Orange"></mw-menu-item>
                            <mw-menu-item text="Apple"></mw-menu-item>
                            <mw-menu-item text="Pear"></mw-menu-item>
                        </div>
                    </mw-autocomplete>
                </mw-card-body>
                <mw-card-footer><mw-button variant="filled" @click="onSend" label="Send"></mw-button></mw-card-footer>
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
