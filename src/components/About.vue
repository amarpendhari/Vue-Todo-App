<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h2>About</h2>
      </div>
      <div class="card-body">
        <h5 class="card-title">Version 1.0</h5>
        <p class="card-text">This project consists of 2 Todo Apps</p>
        <router-link class to="/">
          <p class="card-text">1. A Single Component based Todo App</p>
        </router-link>
        <router-link class to="/todoappVuex">
          <p class="card-text">2. A Multiple Component based Todo App using Vuex</p>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {}
};
</script>


<style>
</style>