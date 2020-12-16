<template>
  <b-button
    pill
    variant="primary"
    class="add-item-button"
    size="lg"
    @click="addList"
  >
    <b-icon icon="plus" aria-hidden="true"
  /></b-button>
</template>

<script>
export default {
  name: "AddToDoListButton",
  methods: {
    addList() {
      this.$store.commit("addNewToDoList", {
        id: new Date().getTime(),
        title: `#${this.toDoList.length + 1} New List`,
        items: [
          {
            id: new Date().getTime(),
            value: "#1 task",
            done: false,
          },
          {
            id: new Date().getTime() + 1,
            value: "#2 task",
            done: false,
          },
          {
            id: new Date().getTime() + 2,
            value: "#3 task",
            done: false,
          },
        ],
      });
    },
  },
  computed: {
    toDoList() {
      return this.$store.getters.currentToDoList;
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1023px) {
  .add-item-button {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    padding: 1.3rem 1.5rem;
  }
}

@media only screen and (min-width: 1024px) {
  .add-item-button {
    position: fixed;
    left: calc(50% - (1.5rem + 12.5px));
    bottom: 1rem;
    padding: 1.3rem 1.5rem;
  }
}
</style>
