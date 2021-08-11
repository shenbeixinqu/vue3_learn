import {mapGetters, useStore} from 'vuex'
import { computed } from 'vue'
import { useMapper } from '../hooks/useMap'

export function useGetters(mapper){
   return useMapper(mapper, mapGetters)
} 