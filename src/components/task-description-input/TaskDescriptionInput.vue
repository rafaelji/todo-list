<template>
  <b-form-input
    class="task-input"
    :value="description"
    placeholder="Enter task"
    @keyup="(event) => updateTaskDescription(id, event.target.value, done)"
    :class="done ? 'input-with-line-through' : ''"
  ></b-form-input>
</template>
<script>
export default {
  name: "TaskDescriptionInput",
  props: {
    listId: Number,
    id: Number,
    description: String,
    done: Boolean,
  },
  methods: {
    updateTaskDescription(id, value, done) {
      this.$store.commit("setCurrentEditingToDoList", {
        ...this.currentToDoList,
        items: this.$set(
          this.currentToDoList.items,
          this.currentToDoList.items.findIndex((item) => item.id === id),
          { id, value, done }
        ),
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
<style scoped>
.task-input {
  margin-bottom: 0.5rem;
}

.input-with-line-through {
  text-decoration-line: line-through;
}
</style>
