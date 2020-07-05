<template>
  <div class="my-4">
    <div class="block">
      <input class="p-2" v-bind:placeholder="placeholder" name="ToDoItem" type="text" v-model="newTodo"/>
      <button class="bg-black text-white py-2 px-3" @click="validate()">Add</button>
    </div>
    <div v-if="errors.length > 0" class="block">
      <span v-for="(error, index) in errors" :key="index">{{ error }}</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ToDoForm',
  data() {
    return {
      newTodo: '',
      errors: [],
      placeholder: 'Add new To Do'
    };
  },
  methods: {
    ...mapActions({
      addNewTodo_Action: 'addNewTodo'
    }),
    clearTodoField() {
      this.newTodo = '';
    },
    validate() {
      if(this.newTodo.length === 0) {
        this.errors = [];
        this.errors.push('Please add a to do item');
      } else {
        this.errors = [];
        this.addNewTodo_Action(this.newTodo);
        this.clearTodoField();
      }
    }
  }
}
</script>
