<template>
  <b-form-checkbox
    :id="`todo-item-done${id}`"
    :name="`todo-item-done${id}`"
    v-model="doneData"
    :value="true"
    :unchecked-value="false"
    size="lg"
    @change="(doneValue) => updateTaskDoneStatus(id, doneValue)"
  />
</template>
<script>
export default {
  name: "TaskDoneStatusCheckbox",
  props: {
    listId: Number,
    id: Number,
    done: Boolean,
  },
  data: function () {
    return {
      doneData: this.done,
    };
  },
  methods: {
    updateTaskDoneStatus(id, done) {
      const listIndex = this.currentToDoList.items.findIndex(
        (item) => item.id === id
      );

      this.$store.commit("setCurrentEditingToDoList", {
        ...this.currentToDoList,
        items: this.$set(this.currentToDoList.items, listIndex, {
          id,
          value: this.currentToDoList.items[listIndex].value,
          done,
        }),
      });
    },
  },
  computed: {
    currentToDoList() {
      return this.$store.getters.currentToDoList[
        this.$store.getters.currentToDoList.findIndex((item) => {
          return item.id === this.listId;
        })
      ];
    },
  },
};
</script>
