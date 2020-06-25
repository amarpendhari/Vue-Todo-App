<template>
  <div class="container">
    <h2 class="text-center">Todo App using Vuex</h2>
    <AddTodo></AddTodo>
    <div class="d-flex-aic p-3 m-3">
      <FilterTodos></FilterTodos>
      <div class="legend">
        <span class="bg-light p-2">Double click to mark as complete</span>
        <span>
          <span class="incomplete-box"></span> = Incomplete
        </span>
        <span>
          <span class="complete-box"></span> = Complete
        </span>
      </div>
    </div>
    <h1 class="text-center">Todo List</h1>
    <div class="todos">
      <div
        :class="{'is-complete': todo.completed}"
        @dblclick="onDBLclick(todo)"
        class="todo"
        v-for="todo in allTodos"
        :key="todo.id"
      >
        {{ todo.title}}
        <i class="fa fa-trash" aria-hidden="true" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import AddTodo from "./addTodo";
import FilterTodos from "./filterTodos";
export default {
  name: "Todos",
  data() {
    return {};
  },
  components: {
    AddTodo,
    FilterTodos
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDBLclick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    }
  },
  created() {
    this.fetchTodos();
  },
  computed: mapGetters(["allTodos"])
};
</script>


<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  align-items: center;
}
.legend span {
  margin-left: 10px;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #808080;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #808080;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>