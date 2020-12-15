<template>
  <b-modal :id="`bv-modal-${currentToDoList.id}`" hide-footer hide-header-close>
    <template #modal-title>
      <b-form-input
        v-model="currentToDoList.title"
        placeholder="Enter To Do List title"
      ></b-form-input>
    </template>
    <div class="d-block text-left">
      <ul>
        <li v-for="item in currentToDoList.items" :key="item.id">
          <b-form-input
            :value="item.value"
            placeholder="Enter To Do List title"
            @keyup="
              (event) => updateItem(item.id, event.target.value, item.done)
            "
          ></b-form-input>
        </li>
      </ul>
    </div>
    <b-button
      class="mt-3"
      block
      @click="$bvModal.hide(`bv-modal-${currentToDoList.id}`)"
      >Close Me</b-button
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
    updateItem(id, value, done) {
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
</style>
