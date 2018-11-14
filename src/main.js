import Vue from 'vue'
import App from './App.vue'

// Add material ui looks
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)

// Add highcharts
import HighchartsVue from "highcharts-vue"
Vue.use(HighchartsVue)


// Configure Vue
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
