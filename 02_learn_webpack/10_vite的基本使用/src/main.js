import _ from 'lodash-es'
import { sum } from './js/math'
import "./css/body.css"
import "./css/style.less"

console.log("Hello World");
console.log(sum(10, 20))

console.log(_.join(['abc', 'cba'], '-'))

const titleEl = document.createElement("div")
titleEl.className = "title"
titleEl.innerHTML = "Hello Vite"
document.body.append(titleEl)