<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <router-link to="/" class="navbar-brand mr-0 mr-md-2">
      To Do List
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link to="/login" class="nav-link">Login</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
