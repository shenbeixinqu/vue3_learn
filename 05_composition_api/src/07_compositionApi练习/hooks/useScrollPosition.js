import {ref} from 'vue'

export default function(){
    
    const scollX = ref(0)
    const scollY = ref(0)

    document.addEventListener('scroll', () => {
        scollX.value = window.scrollX;
        scollY.value = window.scrollY
    })

    return {
        scollX,
        scollY
    }
}