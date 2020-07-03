<template>
  <div class="about">
    <h2>About: To Do List</h2>
    Completed: {{ completed }}
    Pending: {{ pending }}
    <ToDoForm/>
    <ToDoList/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ToDoList from '@/components/ToDoList'
import ToDoForm from '@/components/ToDoForm'

export default {
  name: 'about',
  components: {
    ToDoList,
    ToDoForm
  },
  computed: {
    ...mapGetters({
      completed: 'completedTodos',
      pending: 'pendingTodos'
    })
  }
}
</script>

<style scoped>

</style>
