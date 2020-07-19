<template>
  <div>
    <h1 class="text-center text-2xl py-4">{{ title }} {{currentcount}}</h1>
    <nav class="bg-black px-8 shadow-md">
      <div id="nav" class="-mb-px flex justify-center">
        <router-link
          class="no-underline text-white text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs p-3"
          to="/"
          exact-active-class="bg-white">
          Home
        </router-link>
        <router-link
          class="no-underline text-white text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs p-3"
          to="/about"
          exact-active-class="bg-white">
          About
        </router-link>
        <router-link
          class="no-underline text-white text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs p-3"
          to="/attractions"
          exact-active-class="bg-white">
          Attractions
        </router-link>
      </div>
    </nav>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  props: {
    title: String,
    show: Boolean
  },
  computed: {
    ...mapGetters({
      currentcount: 'getCount'
    })
  }
}
</script>

<style scoped>
#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active, #nav a.router-link-active {
  color: #42b983;
}
</style>
