<template>
  <b-modal :id="`bv-modal-${currentToDoList.id}`" hide-footer>
    <template #modal-title>{{ currentToDoList.title }}</template>
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
    title: String,
    imgUrl: String,
    items: Array,
  },
  mounted() {
    this.$root.$on("bv::modal::hidden", () => {
      this.$store.commit("editToDoList", null);
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
