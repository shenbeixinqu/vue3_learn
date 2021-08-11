import {mapState, useStore} from 'vuex'
import { computed } from 'vue'
import { useMapper } from '../hooks/useMap'

export function useState(mapper){
    return useMapper(mapper, mapState)
} 