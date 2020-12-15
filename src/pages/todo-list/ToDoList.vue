<template>
  <div>
    <NavBar />
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="cards-column">
          <b-card
            v-for="item in list"
            :key="item.id"
            :title="'Card Title' + item.title"
            img-src="https://picsum.photos/600/300/?image=26"
            img-alt="Image"
            img-top
            tag="div"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              <ul>
                <li>Fazer coisa 1</li>
                <li>Fazer coisa 1</li>
                <li>Fazer coisa 1</li>
                <li>...</li>
              </ul>
            </b-card-text>

            <b-button block href="#" variant="primary">Edit</b-button>
          </b-card>
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

export default {
  name: "ToDoList",
  data: () => ({
    list: [],
  }),
  components: { NavBar },
  methods: {
    addList() {
      this.list.push({
        id: new Date().getTime(),
        title: "",
        imgUrl: "",
        items: [],
      });
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
