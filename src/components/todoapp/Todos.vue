<template>
  <div class="container">
    <h2 class="text-center">Vuex Todo App</h2>
    <AddTodo></AddTodo>
    <div class="d-flex-aic p-3 m-3">
      <FilterTodos></FilterTodos>
      <div class="legend">
        <span class="bg-light p-2">Click to mark as complete</span>
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
      <div v-for="todo in allTodos" :key="todo.id">
        <TodoItem :todo="todo"></TodoItem>
      </div>
    </div>
  </div>
</template>


<script>
import TodoItem from "./TodoItem";
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
    FilterTodos,
    TodoItem
  },
  methods: {
    ...mapActions(["fetchTodos"])
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