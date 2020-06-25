<template>
  <div class="d-flex">
    Filter Todos:
    <select @change="filterTodo($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>


<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["filterTodo"])
  }
};
</script>


<style scoped>
select {
  margin-left: 10px;
  padding: 5px;
  border: #41b883 1px solid;
}
</style>