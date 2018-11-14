<template>
    <div>
        <div class="header-row">
            <div class="header-item" v-for="header in headers" :key="header">
                {{header}}
            </div>
        </div>
        <div v-for="(week, weekNumber) in weeks" :key="weekNumber">
            <GraphBlocksRow v-bind:week="week" />
        </div>
    </div>
</template>

<script>
    import keys from "lodash/keys"
    import GraphBlocksRow from "./GraphBlocksRow"

    export default {
        name: "GraphBlocks",
        props: {
            weeks: Array,
        },

        computed: {
            headers() {
                if (!this.weeks[0]) return []

                return keys(this.weeks[0].data).splice(1)
            }
        },

        components: { GraphBlocksRow }
    }
</script>

<style lang="scss" scoped>
    .header-row {
        padding-left: 128px;
        display: flex;
    }
    .header-item {
        width: 96px;
        padding: 2px;
    }
</style>