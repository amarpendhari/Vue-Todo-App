<template>
  <div>
    <nav class="navbar navbar-light bg-light nav nav-pills justify-content-center">
      <router-link class="nav-link" to="/">Todo-APP</router-link>
      <router-link class="nav-link" to="/todoappVuex">Todo-APP with Vuex</router-link>
      <router-link class="nav-link" to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data() {
    return {};
  }
};
</script>

<style>
a.nav-link {
  color: #c9c9c9;
}
a.nav-link:hover {
  color: #000;
}
.nav-link.router-link-exact-active {
  background: #c9c9c9;
  color: white;
}
</style>