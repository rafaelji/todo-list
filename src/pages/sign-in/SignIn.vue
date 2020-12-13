<template>
  <div>
    <NavBar />
    <b-container fluid>
      <b-row>
        <b-col offset-md="3" offset-lg="4" sm="12" md="6" lg="4">
          <b-card class="w-100">
            <b-form>
              <b-form-group
                id="email-input-group"
                label="Email address:"
                label-for="email"
              >
                <b-form-input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="password-input-group"
                label="Password:"
                label-for="password"
              >
                <b-form-input
                  id="password"
                  type="password"
                  required
                  placeholder="Enter password"
                ></b-form-input>
              </b-form-group>

              <b-button block type="submit" variant="primary">Login</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/Navbar";

export default {
  name: "SignIn",
  components: {
    NavBar,
  },
};
</script>
