<template>
  <b-modal :id="`bv-modal-${currentToDoList.id}`" hide-footer hide-header-close>
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
          <b-form-checkbox
            :id="`todo-item-done${item.id}`"
            :name="`todo-item-done${item.id}`"
            v-model="item.done"
            :value="true"
            :unchecked-value="false"
            size="lg"
            @change="(done) => updateTaskDoneStatus(item.id, done)"
          />
          <b-form-input
            class="task-input"
            :value="item.value"
            placeholder="Enter task"
            @keyup="
              (event) =>
                updateTaskDescription(item.id, event.target.value, item.done)
            "
            :class="item.done ? 'input-with-line-through' : ''"
          ></b-form-input>
          <b-button
            @click="() => removeTask(item.id)"
            size="sm"
            variant="danger"
            class="float-right ml-2"
          >
            <b-icon icon="x" aria-hidden="true" />
          </b-button>
        </li>
      </ul>
    </div>
    <b-button
      class="mt-3"
      block
      @click="$bvModal.hide(`bv-modal-${currentToDoList.id}`)"
      >Done</b-button
    >
  </b-modal>
</template>
<script>
export default {
  name: "EditListModal",
  props: {
    id: Number,
  },
  mounted() {
    this.$root.$on("bv::modal::hidden", () => {
      this.$store.commit("editToDoList", null);
    });
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

.task-input {
  margin-bottom: 0.5rem;
}

.task-list {
  list-style-type: none;
  padding-inline-start: 0 !important;
}

.input-with-line-through {
  text-decoration-line: line-through;
}
</style>
