<template>
  <div>
    <EditListModal :id="id" />
    <b-card tag="div" style="max-width: 20rem" class="mb-2">
      <b-card-text>
        <h1>{{ title }}</h1>
        <ul class="task-list">
          <li
            v-for="item in items"
            :key="item.id"
            :class="item.done ? 'task-done' : ''"
          >
            <b-icon v-if="item.done" icon="check2" aria-hidden="true" />{{
              item.value
            }}
          </li>
        </ul>
      </b-card-text>

      <b-button @click="editList" variant="primary" class="float-left">
        <b-icon icon="pencil" aria-hidden="true" />
      </b-button>
      <b-button @click="removeList" variant="danger" class="float-right">
        <b-icon icon="trash" aria-hidden="true" />
      </b-button>
    </b-card>
  </div>
</template>

<script>
import EditListModal from "@/components/edit-list-modal/EditListModal";

export default {
  name: "ToDoListItem",
  components: { EditListModal },
  props: {
    id: Number,
    title: String,
    items: Array,
  },
  methods: {
    removeList() {
      this.$store.commit("removeToDoList", this.id);
    },
    editList() {
      this.$store.commit("editToDoList", this.id);
    },
  },
};
</script>

<style scoped>
.task-list {
  list-style-type: none;
  padding-inline-start: 0 !important;
}

.task-done {
  text-decoration-line: line-through;
}
</style>
