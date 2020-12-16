<template>
  <div>
    <NavBar />
    <b-spinner
      v-if="loading"
      class="loading-spinner"
      label="Spinning"
    ></b-spinner>
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="cards-column">
          <ToDoListItem
            v-for="item in toDoList"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :items="item.items"
          />
        </b-col>
      </b-row>
    </b-container>
    <AddToDoListButton />
  </div>
</template>

<script>
import NavBar from "@/components/navbar/Navbar";
import ToDoListItem from "@/components/to-do-list-item/ToDoListItem";
import AddToDoListButton from "@/components/add-todo-list-button/AddToDoListButton";
import ToDoListService from "@/services/ToDoListService";

export default {
  name: "ToDoList",
  components: { AddToDoListButton, NavBar, ToDoListItem },
  data: () => ({ loading: false }),
  async created() {
    try {
      this.loading = true;
      const data = await ToDoListService.getToDoList();

      if (data.length > 0) {
        this.$store.commit("setupToDoList", data);
      }

      this.loading = false;
    } catch (error) {
      this.$store.commit("showNotification", {
        type: "error",
      });
      console.log(error);
      this.loading = false;
    }
  },
  computed: {
    toDoList() {
      return this.$store.getters.currentToDoList;
    },
  },
};
</script>

<style scoped>
.cards-column {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.loading-spinner {
  position: absolute;
  top: 50%;
  left: calc(50% - 12px);
}
</style>
