<template>
  <div>
    <NavBar />
    <b-container fluid>
      <b-row>
        <b-col offset-md="3" sm="12" md="6">
          <b-jumbotron
            header="Easy List"
            lead="Making a to-do list has never been easier"
          >
            <p>Sign up to start creating your own lists</p>
            <b-button
              v-if="!currentUser.email"
              @click="navigateTo('sign-up')"
              variant="primary"
              class="mr-1"
              >Sign up</b-button
            >
            <b-button
              v-if="!currentUser.email"
              @click="navigateTo('sign-in')"
              variant="outline-secondary"
              >Sign in</b-button
            >
            <b-button
              v-if="currentUser.email"
              @click="navigateTo('app')"
              variant="primary"
              class="mr-1"
              >Go to do list page</b-button
            >
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/Navbar";

export default {
  name: "Home",
  components: {
    NavBar,
  },
  methods: {
    navigateTo(url) {
      this.$router.push(url);
    },
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
};
</script>
