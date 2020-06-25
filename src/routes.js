import About from "./components/About.vue";
import TodoApp from "./components/Todo-App.vue";
import Todos from "./components/todoapp/Todos.vue";

export const routes = [
  { path: "/", component: TodoApp },
  { path: "/todoappvuex", component: Todos },
  { path: "/about", component: About }
];
