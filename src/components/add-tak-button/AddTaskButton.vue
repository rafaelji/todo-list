<template>
  <b-button @click="addTask" size="sm" variant="primary" block>
    <b-icon icon="plus" aria-hidden="true" /> Add task
  </b-button>
</template>
<script>
export default {
  name: "AddTaskButton",
  props: {
    listId: Number,
  },
  methods: {
    addTask() {
      this.$store.commit("setCurrentEditingToDoList", {
        ...this.currentToDoList,
        items: this.currentToDoList.items.push({
          id: new Date().getTime(),
          value: "",
          done: false,
        }),
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
