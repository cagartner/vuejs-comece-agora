import Vue from 'vue'
import App from './App.vue'

import Eagle, { Options } from 'eagle.js'
// import eagle.js default styles
import 'eagle.js/dist/eagle.css'
import 'highlight.js/styles/monokai-sublime.css'
import hljs from 'highlight.js'
// import animate.css for slide transition
import 'animate.css'

import '@fortawesome/fontawesome-free/css/all.css'

Options.hljs = hljs

Vue.use(Eagle)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
