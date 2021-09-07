import {mapState, useStore} from 'vuex'
import { computed } from 'vue'

export function useMapper(mapper, mapFn){
    const store = useStore()
    const storeStatesFns = mapFn(mapper)
    const storeState = {}
    Object.keys(storeStatesFns).forEach(fnKey => {
        const fn = storeStatesFns[fnKey].bind({$store:store})
        storeState[fnKey] = computed(fn)
    })

    return storeState
}  