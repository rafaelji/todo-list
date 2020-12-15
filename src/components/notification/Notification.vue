<template>
  <b-toast id="toast" />
</template>

<script>
export default {
  name: "Notification",
  methods: {
    showErrorToast() {
      this.$bvToast.toast(
        `A error happened, run to the hills! Or you can look at the browser console and try to figure out the problem ;)`,
        {
          toaster: "b-toaster-bottom-center",
          variant: "danger",
          title: "Attention",
          autoHideDelay: 3000,
        }
      );
    },
    showSuccessToast(message) {
      this.$bvToast.toast(message, {
        toaster: "b-toaster-bottom-center",
        variant: "success",
        title: "Success",
        autoHideDelay: 3000,
      });
    },
    showInfoToast(title, message) {
      this.$bvToast.toast(message, {
        toaster: "b-toaster-bottom-center",
        variant: "info",
        title: title,
        autoHideDelay: 5000,
      });
    },
  },
  computed: {
    notification() {
      return this.$store.getters.notification;
    },
  },
  watch: {
    notification(newState) {
      if (newState.type === "error") {
        this.showErrorToast();
      }

      if (newState.type === "success") {
        this.showSuccessToast(newState.message);
      }

      if (newState.type === "info") {
        this.showInfoToast(newState.title, newState.message);
      }
    },
  },
};
</script>
