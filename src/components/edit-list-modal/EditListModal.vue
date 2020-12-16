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
      <b-button @click="addTask" size="sm" variant="primary" block>
        <b-icon icon="plus" aria-hidden="true" /> Add task
      </b-button>
    </div>
  </b-modal>
</template>
<script>
import TaskDoneStatusCheckbox from "@/components/task-done-status-checkbox/TaskDoneStatusCheckbox";
import TaskDescriptionInput from "@/components/task-description-input/TaskDescriptionInput";
import RemoveTaskButton from "@/components/remove-task-button/RemoveTaskButton";

export default {
  name: "EditListModal",
  components: {
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
          (item) => item.id === this.id
        )
      ];
    },
    toDoListSelectedToEdit() {
      return this.$store.getters.toDoListSelectedToEdit;
    },
    vModelTitle: {
      get() {
        return this.currentToDoList.title;
      },
      set(value) {
        this.$store.commit("setCurrentEditingToDoList", {
          ...this.currentToDoList,
          title: value,
        });
      },
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
