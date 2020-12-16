<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="mb-3">
    <router-link to="/" class="navbar-brand mr-0 mr-md-2">
      Easy List
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link v-if="!currentUser.email" to="/sign-in" class="nav-link"
          >Sign in</router-link
        >

        <b-nav-item-dropdown v-if="currentUser.email" right>
          <template #button-content>
            <em>{{ currentUser.email }}</em>
          </template>
          <b-dropdown-item @click="signOut">
            <b-icon icon="power" aria-hidden="true" class="mr-1" />
            Sign Out
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import UserService from "@/services/UserService";

export default {
  name: "NavBar",
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    async signOut() {
      try {
        await UserService.signOut();
        await this.$router.push("/").catch(() => {});
        this.$store.commit("removeCurrentUserData");
        this.$store.commit("showNotification", {
          type: "info",
          title: "Adios amigo",
          message: `Bye bye!`,
        });
      } catch (error) {
        this.$store.commit("showNotification", {
          type: "error",
        });
        console.log(error);
      }
    },
  },
};
</script>
