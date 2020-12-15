<template>
  <div>
    <b-button
      id="show-btn"
      @click="$bvModal.show(`bv-modal-${currentToDoList.id}`)"
      >Open Modal</b-button
    >

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
  </div>
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
  computed: {
    currentToDoList() {
      return this.$store.getters.currentToDoList[
        this.$store.getters.currentToDoList.findIndex(
          (item) => item.id === this.id
        )
      ];
    },
  },
};
</script>
