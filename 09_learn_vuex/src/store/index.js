import {createStore} from 'vuex'

const store = createStore({
    state(){
        return{
            counter:150
        }
    },
    mutations:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        }
    }
})

export default store