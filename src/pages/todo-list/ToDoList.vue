<template>
  <div>
    <NavBar />
    <b-container fluid>
      <b-row>
        <b-col sm="12" md="4" class="d-flex justify-content-center">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=26"
            img-alt="Image"
            img-top
            tag="article"
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
