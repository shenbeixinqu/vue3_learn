import dayjs from 'dayjs'

export default function(app){
    let formString = 'YYYY-MM-DD HH:mm:ss'
    app.directive('format-time', {
        created(el,bindings) {
            if (bindings.value){
                formString = bindings.value
            }
        },

        mounted(el,bindings) {
            console.log("format mounted")
            const textContent = el.textContent
            let timestamp = parseInt(textContent)
            if (textContent.length === 10 ){
                timestamp = timestamp * 1000
            }
            el.textContent = dayjs(timestamp).format(formString)
        },
    })
   
}