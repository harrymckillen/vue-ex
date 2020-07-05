<template>
  <ul class="my-4">
    <ToDoItem v-for="(todo, index) in todos" :key="index" :item="todo"/>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import ToDoItem from '@/components/ToDoItem';

export default {
  name: 'ToDoList',
  components: {
    ToDoItem
  },
  computed: {
    ...mapState({
      todos: 'todos'
    })
  }
}
</script>

<style>

</style>
