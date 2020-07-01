<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header title="Hello"/>
    <kebab-case title="Blah" show="true" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Harry from './components/Harry.vue'

export default {
  name: 'App',
  components: {
    Header,
    'kebab-case': Harry
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
