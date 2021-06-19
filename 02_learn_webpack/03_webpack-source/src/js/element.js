
import '../css/style.css'
import '../css/title.less'
import '../css/image.css'

import zznhimg from '../image/zznh.png'

const divEl = document.createElement("div")
divEl.className = "title"
divEl.innerHTML = "你好啊, 李银河"

const bgdivEl = document.createElement("div")
bgdivEl.className = 'image-bg'

const imgEl = document.createElement("img")
imgEl.src = zznhimg

document.body.appendChild(divEl)
document.body.appendChild(bgdivEl)