<template>
  <div>
    <NavBar />
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

export default {
  name: "ToDoList",
  components: { AddToDoListButton, NavBar, ToDoListItem },
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
</style>
