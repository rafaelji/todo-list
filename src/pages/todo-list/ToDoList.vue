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
            :img-url="item.imgUrl"
            :items="item.items"
          />
        </b-col>
      </b-row>
    </b-container>
    <b-button
      pill
      variant="primary"
      class="add-item-button"
      size="lg"
      @click="addList"
    >
      <b-icon icon="plus" aria-hidden="true"
    /></b-button>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/Navbar";
import ToDoListItem from "@/components/to-do-list-item/ToDoListItem";

export default {
  name: "ToDoList",
  components: { NavBar, ToDoListItem },
  methods: {
    addList() {
      const min = Math.ceil(1);
      const max = Math.floor(100);
      this.$store.commit("addNewToDoList", {
        id: new Date().getTime(),
        title: `#${this.toDoList.length + 1} New List`,
        imgUrl: `https://picsum.photos/600/300/?image=${
          Math.floor(Math.random() * (max - min + 1)) + min
        }`,
        items: [
          {
            id: new Date().getTime(),
            value: "#1 task",
            done: false,
          },
          {
            id: new Date().getTime() + 1,
            value: "#2 task",
            done: false,
          },
          {
            id: new Date().getTime() + 2,
            value: "#3 task",
            done: false,
          },
        ],
      });
    },
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

@media only screen and (max-width: 1023px) {
  .add-item-button {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    padding: 1.3rem 1.5rem;
  }
}

@media only screen and (min-width: 1024px) {
  .add-item-button {
    position: fixed;
    left: calc(50% - (1.5rem + 12.5px));
    bottom: 1rem;
    padding: 1.3rem 1.5rem;
  }
}
</style>
