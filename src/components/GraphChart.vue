<template>
    <div class="wrapper">
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
    import keys from "lodash/keys"
    import round from "lodash/round"
    import { total } from "../constants"

    const chartOptions = {
        chart: {
            type: "line",
        },
        title: {
            text: "Retention",
        },
        exporting: {},
        xAxis: {
            type: 'category',
            allowDecimals: false,
        },
        yAxis: {
            title: { text: "% of users" },
            max: 100,
        },
        series: [],
        plotOptions: {
            series: {
                animation: false,
            },
        },
    }

    const serieOptions = {
        name: "name",
        turboThreshold: 0,
        _colorIndex: 0,
        _symbolIndex: 0,
        data: [],
    }

    const createSerie = (week, index) => ({
        ...serieOptions,
        name: week.title,
        _colorIndex: index,
        _symbolIndex: index,

        // Process the data
        data: keys(week.data)
            .slice(1)
            .map(key => ([
                key,
                // Calculate percentage
                round((week.data[key] / week.data[total]) * 100)
            ])),
    })

    export default {
        name: "GraphChart",
        props: {
            weeks: Array,
        },
        computed: {
            chartOptions() {
                return {
                    ...chartOptions,
                    series: this.weeks.map(createSerie),
                }
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        padding: 32px;
    }
</style>