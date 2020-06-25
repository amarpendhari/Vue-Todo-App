<template>
  <div class="container text-center">
    <h2 class="text-center">TODO APP</h2>
    <div class="d-flex">
      <input
        type="text"
        placeholder="Add todo here ..."
        class="form-control"
        v-model="newitem.title"
      />
      <button class="btn btn-primary" @click="addtodo(newitem)">Add</button>
    </div>
    <div class="bg-light p-3 d-flex-aic m-3">
      <div class="text-left">
        <span>Filter Todos: {{ this.filtercnt }}</span>
        <select class="ml-2" v-model="filtercnt" @change="setTodo()">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      <div class="d-flex">
        <span>Todo Status -</span>
        <span class="todo">Needs To Be done</span>
        <span class="todo completed">Completed</span>
      </div>
    </div>

    <div class="result">
      <h3>Todo-List</h3>
      <ul class="todos">
        <li
          class="todo"
          :class="{completed: todo.completed}"
          draggable="true"
          @dragstart="dragStart(i, $event)"
          @dragover.prevent
          @dragenter="dragEnter"
          @dragleave="dragLeave"
          @dragend="dragEnd"
          @drop="dragFinish(i, $event)"
          v-for="(todo,i) in todos"
          :key="i"
          @click="todoCompleted(todo)"
        >
          {{ todo.title }}
          <i class="fa fa-trash" aria-hidden="true" @click.stop="deleteTodo(i)"></i>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "TodoApp",
  data() {
    return {
      todos: [],
      dragging: -1,
      filtercnt: 100,
      isCompleted: false,
      newitem: {
        completed: false,
        id: "",
        title: "",
        userId: 1
      }
    };
  },
  methods: {
    setTodo() {
      fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=${this.filtercnt}`
      )
        .then(response => response.json())
        .then(data => {
          this.todos = data;
        });
    },
    addtodo() {
      if (this.newitem.title == "") {
        alert("Enter Todo Item");
      } else {
        fetch(`https://jsonplaceholder.typicode.com/todos`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.todos)
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.todos.push({
              completed: false,
              id: this.todos.length,
              title: this.newitem.title,
              userId: 1
            });
          });
      }
    },
    todoCompleted(todo) {
      if (todo.completed != true) {
        todo.completed = true;
      } else {
        todo.completed = false;
      }
    },
    deleteTodo(i) {
      this.todos.splice(i, 1);
    },
    dragStart(which) {
      //ev.dataTransfer.setData('Text', this.id);
      //ev.dataTransfer.dropEffect = 'move'
      this.dragging = which;
    },
    dragEnter() {
      /* 
      if (ev.clientY > ev.target.height / 2) {
        ev.target.style.marginBottom = '10px'
      } else {
        ev.target.style.marginTop = '10px'
      }*/
    },
    dragLeave() {
      //ev.target.style.marginTop = '0px'
      //ev.target.style.marginBottom = '0px'
    },
    dragEnd() {
      //ev.target.style.marginTop = '0px'
      this.dragging = -1;
    },
    dragFinish(to) {
      this.moveItem(this.dragging, to);
      //ev.target.style.margin = '10px'
    },
    moveItem(from, to) {
      if (to === -1) {
        this.removeItemAt(from);
      } else {
        this.todos.splice(to, 0, this.todos.splice(from, 1)[0]);
      }
    }
  },
  mounted() {
    this.setTodo();
  }
};
</script>


<style>
.todos {
  display: grid;
  grid-template-columns: auto auto;
}
.todo {
  padding: 5px 20px;
  background: #007bff;
  margin: 10px;
  display: flex;
  color: #fff;
  justify-content: space-between;
  border-radius: 5px;
  align-items: center;
}

.todo.completed {
  background: burlywood;
}
.d-flex-aic {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
}
.d-flex {
  display: flex !important;
  align-items: center;
}
</style>