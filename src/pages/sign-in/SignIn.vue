<template>
  <div>
    <NavBar />
    <b-container fluid>
      <b-row>
        <b-col offset-md="3" offset-lg="4" sm="12" md="6" lg="4">
          <b-card class="w-100">
            <b-form @submit="onSubmit" @submit.prevent>
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
                  v-model.trim="email"
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
                  v-model.trim="password"
                ></b-form-input>
              </b-form-group>

              <b-button block type="submit" variant="primary">
                <b-spinner v-if="loading" small label="Spinning"></b-spinner>
                {{ accessType }}
              </b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/Navbar";
import UserService from "@/services/UserService";

export default {
  name: "SignIn",
  components: {
    NavBar,
  },
  data: () => ({ accessType: "", email: "", password: "", loading: false }),
  created: function () {
    this.accessType = this.$route.path === "/sign-in" ? "Sign In" : "Sign Up";
  },
  methods: {
    async onSubmit() {
      try {
        this.loading = true;

        let user;

        if (this.accessType === "Sign In") {
          user = await UserService.signIn(this.email, this.password);
        }

        if (this.accessType === "Sign Up") {
          user = await UserService.signUp(this.email, this.password);
        }

        if (!user) {
          throw new Error("Incorrect access type.");
        }

        this.$store.commit("storeLoggedInUser", user);
        await this.$router.push("/app");
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
  },
};
</script>
