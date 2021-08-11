<template>
  <div>
      <hr>
      <p>总价值:{{ $store.getters.totalPrice}}</p>
      <p>大于n：{{$store.getters.totalPriceGreatN(2)}}</p>
      <hr>
      <h2>ageInfo:{{ageInfo}}</h2>
      <h2>{{nameInfo}}</h2>
  </div>
</template>

<script>

import { useGetters} from '../hooks/useGetters'

export default {
    setup() {
        
        const storeGetters = useGetters(["ageInfo","nameInfo"])
        return{
            ...storeGetters
        }
    }
}
</script>

<style>

</style>