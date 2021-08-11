import {mapGetters, useStore} from 'vuex'
import { computed } from 'vue'

export function useGetters(mapper){
    const store = useStore()
    const storeStatesFns = mapGetters(mapper)
    const storeState = {}
    Object.keys(storeStatesFns).forEach(fnKey => {
        const fn = storeStatesFns[fnKey].bind({$store:store})
        storeState[fnKey] = computed(fn)
    })

    return storeState
} 