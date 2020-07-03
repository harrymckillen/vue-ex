<template>
  <div>
    <input name="ToDoItem" type="text" v-model="newTodo"/>
    <button @click="addNewTodo()">Add</button>
  </div>
</template>

<script>
export default {
  name: 'ToDoForm',
  data() {
    return {
      newTodo: ''
    };
  },
  methods: {
    addNewTodo() {
      this.$store.dispatch('addNewTodo', this.newTodo);
      this.newTodo = '';
    }
  }
}
</script>
<style scoped>

</style>
