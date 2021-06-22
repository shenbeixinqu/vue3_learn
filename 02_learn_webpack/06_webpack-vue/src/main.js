// es module的导入
import { sum } from "./js/math";

import {createApp} from 'vue'
// commonjs的导入
const {priceFormat} = require('./js/format')
import './js/element'

import App from './vue/app.vue'

console.log(sum(20,30));
console.log(priceFormat());

const app = createApp(App)
app.mount("#app")



