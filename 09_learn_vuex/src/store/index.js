import {createStore} from 'vuex'

const store = createStore({
    state(){
        return{
            counter:150,
            name:"why",
            age:18,
            height:1.88
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