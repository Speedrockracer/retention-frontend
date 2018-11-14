<template>
    <div>
        <div class="row">
            <div class="title">
                {{week.title}}
            </div>
            <div class="item" v-for="item in itemList" :key="item.step">
                <md-content
                        class="item-content md-elevation-2"
                        v-bind:style="{ background: 'rgba(105, 240, 174, ' + item.percentage/100 + ')' }"
                >
                    <span class="md-body-2 item-text">
                        {{item.percentage}}%
                        <br />
                        <span class="md-caption">
                            {{item.total}} users
                        </span>
                    </span>
                </md-content>
            </div>
        </div>
    </div>
</template>

<script>
    import round from "lodash/round"
    import keys from "lodash/keys"
    import { total } from "../constants"

    export default {
        name: "GraphBlocksRow",
        props: {
            week: {
                type: Object,
                default() { return {} },
            }
        },

        computed: {
            itemList() {
                return keys(this.week.data)
                    .slice(1)
                    .map(key => ({
                        step: key,
                        total: this.week.data[key],
                        // Calculate percentage
                        percentage: round((this.week.data[key] / this.week.data[total]) * 100)
                    }))
            }
        },
    }
</script>

<style lang="scss" scoped>
    .row {
        display:flex;
    }

    .title {
        display: flex;
        align-items: center;
        width: 128px;
    }

    .item {
        width: 96px;
        height: 96px;
        padding: 2px;
    }

    .item-content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

</style>