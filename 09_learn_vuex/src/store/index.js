import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
    state(){
        return{
            counter:150,
            name:"why",
            age:18,
            height:1.88,
            books:[
                {name:"从零学java",price:10,counter:3},
                {name:"从零学js",price:20,counter:2},
                {name:"从零学pyhton",price:30,counter:1},
                {name:"从零学css",price:40,counter:1},
            ],
            discount:0.5,
            multidata:[]
        }
    },
    mutations:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        addBannerData(state, payload){
            state.multidata = payload
        }
    },
    getters:{
        totalPrice(state, getters){
            let totalPrice = 0
            for (const one of state.books){
                totalPrice += one.counter * one.price
            }
            return totalPrice * getters.disCount
        },
        disCount(state){
            return state.discount * 0.4
        },
        totalPriceGreatN(state){
            return function(n){
                let totalPrice = 0
                for (const one of state.books){
                    if (one.counter > n){
                        totalPrice += one.counter * one.price
                    }
                }
                return totalPrice
            }
        },
        nameInfo(state){
            return `name:${state.name}`
        },
        ageInfo(state){
            return `age:${state.age}`
        },
        heightInfo(state){
            return `height:${state.height}`
        }
    },
    actions:{
        incrementAction(context){
            setTimeout(() => {
                context.commit("increment")
            }, 1000)
        },
        getHomeMultidata(context){
            axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
                context.commit("addBannerData", res.data.data.banner.list)
            })
        }
    }
})

export default store