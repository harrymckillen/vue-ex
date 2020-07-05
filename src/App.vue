<template>
  <div class="" id="app">

    <Header title="Sample App"/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>

</style>
