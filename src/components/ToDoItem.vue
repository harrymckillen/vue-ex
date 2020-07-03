<template>
    <li class="todo-item">
      <div>
        <span :class="{completed: item.completed}" @click="toggleTodoCompletion(item)">{{item.title}}</span>
        <button @click="deleteTodo(item)">&times;</button>
      </div>
    </li>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['item'],

  methods: {
    ...mapActions({
      deleteTodo: 'deleteTodo',
      toggleTodoCompletion: 'toggleTodoCompletion'
    })
  }
}
</script>

<style scoped>
  .todo-item {
    width:250px;
    margin: 10px auto;
  }
  .todo-item div {
    display: flex;
    justify-content: space-between;
  }
  .todo-item button {
    background: #000;
    color:#fff;
    border:0;
    border-radius:50%;
  }
  .completed {
    text-decoration: line-through;
  }
</style>
