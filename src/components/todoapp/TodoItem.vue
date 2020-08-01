<template>
  <div :class="{'is-complete': todo.completed}" @click="onDBLclick(todo)" class="todo">
    {{ todo.title}}
    <i class="fa fa-trash" aria-hidden="true" @click="deleteTodo(todo.id)"></i>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    ...mapActions(["deleteTodo"]),
    onDBLclick(todo) {
      if (todo.completed != true) {
        todo.completed = true;
      } else {
        todo.completed = false;
      }
    }
  }
};
</script>

<style>
i {
  padding: 5px;
  cursor: pointer;
}
</style>