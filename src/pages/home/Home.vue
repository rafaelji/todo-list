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
            <b-button variant="primary" class="mr-1" href="#">Sign up</b-button>
            <b-button variant="outline-secondary" href="#">Sign in</b-button>
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
};
</script>
