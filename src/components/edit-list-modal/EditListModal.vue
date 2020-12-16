<template>
  <b-modal :id="`bv-modal-${currentToDoList.id}`" hide-footer>
    <template #modal-title>
      <b-form-input
        v-model="currentToDoList.title"
        placeholder="Enter To Do List title"
      ></b-form-input>
    </template>
    <div class="d-block text-left">
      <ul class="task-list">
        <li
          v-for="item in currentToDoList.items"
          :key="item.id"
          class="d-flex align-items-baseline"
        >
          <TaskDoneStatusCheckbox
            :listId="id"
            :id="item.id"
            :done="item.done"
          />
          <TaskDescriptionInput
            :listId="id"
            :id="item.id"
            :description="item.value"
            :done="item.done"
          />
          <RemoveTaskButton :id="item.id" :listId="id" />
        </li>
      </ul>
      <AddTaskButton :listId="id" />
    </div>
  </b-modal>
</template>
<script>
import TaskDoneStatusCheckbox from "@/components/task-done-status-checkbox/TaskDoneStatusCheckbox";
import TaskDescriptionInput from "@/components/task-description-input/TaskDescriptionInput";
import RemoveTaskButton from "@/components/remove-task-button/RemoveTaskButton";
import AddTaskButton from "@/components/add-tak-button/AddTaskButton";

export default {
  name: "EditListModal",
  components: {
    AddTaskButton,
    RemoveTaskButton,
    TaskDescriptionInput,
    TaskDoneStatusCheckbox,
  },
  props: {
    id: Number,
  },
  mounted() {
    this.$root.$on("bv::modal::hidden", () => {
      this.$store.commit("editToDoList", null);
      this.$store.dispatch("updateToDoList", this.currentToDoList);
    });
  },
  computed: {
    currentToDoList() {
      return this.$store.getters.currentToDoList[
        this.$store.getters.currentToDoList.findIndex(
          (item) => item.id === this.id
        )
      ];
    },
    toDoListSelectedToEdit() {
      return this.$store.getters.toDoListSelectedToEdit;
    },
  },
  watch: {
    toDoListSelectedToEdit(id) {
      this.$bvModal.show(`bv-modal-${id}`);
    },
  },
};
</script>
<style>
h5.modal-title {
  width: 100%;
}

.task-list {
  list-style-type: none;
  padding-inline-start: 0 !important;
}
</style>
