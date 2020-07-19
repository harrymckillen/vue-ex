<template>
  <div class="flex flex-wrap">
    <h3 class="w-full">Counter Controls</h3>
    <p class="w-full">{{currentcount}}</p>
    <button class="w-1/3 bg-gray-600 m-2" @click="incrementCount()">++</button>
    <button class="w-1/3 bg-gray-600 m-2" @click="decrementCount()">--</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      currentcount: 'getCount'
    })
  },
  methods: {
    ...mapActions({
      incrementCount: 'incrementCount',
      decrementCount: 'decrementCount'
    })
  }
}
</script>

<style>

</style>
