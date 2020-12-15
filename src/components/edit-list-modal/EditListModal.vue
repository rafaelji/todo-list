<template>
  <b-modal :id="`bv-modal-${currentToDoList.id}`" hide-footer hide-header-close>
    <template #modal-title>
      <b-form-input
        ref="title"
        v-model="currentToDoList.title"
        placeholder="Enter To Do List title"
        class="border-0"
      ></b-form-input>
    </template>
    <div class="d-block text-center">
      <h3>Hello From This Modal!</h3>
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

    this.$root.$on("bv::modal::shown", () => {
      this.$refs.title.$el.focus();
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
