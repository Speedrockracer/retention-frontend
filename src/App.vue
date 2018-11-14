<template>
    <div id="app">
        <md-app>
            <md-app-toolbar class="md-primary">
                <span class="md-title">Retention graph</span>
            </md-app-toolbar>
            <md-app-content>
                <GraphBlocks v-bind:weeks="retention" />
                <GraphChart v-bind:weeks="retention" />
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    import axios from "axios"
    import GraphBlocks from "./components/GraphBlocks"
    import GraphChart from "./components/GraphChart"
    import { serverUrl } from "./constants"

    export default {
        name: 'app',

        data() {
            return {
                retention: []
            }
        },

        methods: {
            getData() {
                axios.get(serverUrl)
                    .then(response => {
                        this.retention = response.data
                    })
                    .catch(() => {
                        // Todo: Handle error nicely
                    })
            },
        },

        mounted() {
            this.getData()
        },

        components: {
            GraphBlocks,
            GraphChart,
        },
    }
</script>

<style lang="scss">
    @import "~vue-material/dist/theme/engine";

    @include md-register-theme("default", (
            primary: md-get-palette-color(blue, A200), // The primary color of your application
            accent: md-get-palette-color(green, A200) // The accent or secondary color
    ));

    @import "~vue-material/dist/theme/all";
</style>
