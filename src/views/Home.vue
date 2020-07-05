<template>
  <div class="home my-4 w-64 mx-auto">
    <h2 class="text-center text-2xl py-4">Home</h2>
    <p>
      Done: <span class="font-bold text-lg">{{ completed }}</span>
    </p>
    <p>
      Not done: <span class="font-bold text-lg">{{ pending }}</span>
    </p>
    <ToDoForm/>
    <ToDoList/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ToDoList from '@/components/ToDoList'
import ToDoForm from '@/components/ToDoForm'

export default {
  name: 'Home',
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
