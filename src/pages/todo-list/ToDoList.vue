<template>
  <div>
    <NavBar />
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="cards-column">
          <b-card
            title="Card Title"
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
  </div>
</template>

<script>
import NavBar from "@/components/navbar/Navbar";

export default {
  name: "ToDoList",
  components: { NavBar },
};
</script>

<style scoped>
.cards-column {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
