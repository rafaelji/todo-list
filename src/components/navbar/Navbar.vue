<template>
  <div class="center examplex">
    <vs-navbar center-collapsed>
      <template #right>
        <vs-button @click="navigateToLoginPage" flat >Login</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    navigateToLoginPage() {
      this.$router.push('/login');
    }
  }
}
</script>
