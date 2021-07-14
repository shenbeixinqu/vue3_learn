import { createApp } from 'vue'
import App from './03_自定义指令/App.vue'
import registerDirectives from './directives'

const app = createApp(App)
registerDirectives(app)
// 自定义全局指令
// app.directive('focus',{
//     mounted(el) {
//         console.log("mounted")
//         el.focus()
//     }
// })

app.mount('#app')