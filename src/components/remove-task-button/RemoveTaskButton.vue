<template>
  <b-button
    @click="() => removeTask(id)"
    size="sm"
    variant="danger"
    class="float-right ml-2"
  >
    <b-icon icon="x" aria-hidden="true" />
  </b-button>
</template>
<script>
export default {
  name: "RemoveTaskButton",
  props: {
    listId: Number,
    id: Number,
  },
  methods: {
    removeTask(id) {
      const list = this.currentToDoList.items;
      const index = this.currentToDoList.items.findIndex(
        (item) => item.id === id
      );

      list.splice(index, 1);

      this.$store.commit("setCurrentEditingToDoList", {
        ...this.currentToDoList,
        items: list,
      });
    },
  },
  computed: {
    currentToDoList() {
      return this.$store.getters.currentToDoList[
        this.$store.getters.currentToDoList.findIndex(
          (item) => item.id === this.listId
        )
      ];
    },
  },
};
</script>
