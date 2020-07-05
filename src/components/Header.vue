<template>
  <div>
    <h1 class="text-center text-2xl py-4">{{ title }}</h1>
    <nav class="bg-white px-8 pt-2 shadow-md">
      <div id="nav" class="-mb-px flex justify-center">
        <router-link
          class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
          to="/"
          active-class="border-teal-dark">
          Home {{linkActiveClass}}
        </router-link>
        <router-link
          class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
          to="/about"
          active-class="border-teal-dark">
          About
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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
