
import '../css/style.css'
import '../css/title.less'
import '../css/image.css'
import '../font/iconfont.css'

import zznhimg from '../image/zznh.png'

const divEl = document.createElement("div")
divEl.className = "title"
divEl.innerHTML = "你好啊, 李银河"

const bgdivEl = document.createElement("div")
bgdivEl.className = 'image-bg'

const imgEl = document.createElement("img")
imgEl.src = zznhimg

// i元素
const iEl = document.createElement("i")
iEl.className = 'iconfont icon-ashbin'

document.body.appendChild(divEl)
document.body.appendChild(bgdivEl)
document.body.appendChild(iEl)