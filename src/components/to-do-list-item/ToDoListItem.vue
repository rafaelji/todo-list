<template>
  <b-card
    :img-src="imgUrl"
    img-alt="Image"
    img-top
    tag="div"
    style="max-width: 20rem"
    class="mb-2"
  >
    <b-card-text>
      <h1>{{ title }}</h1>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.value }}</li>
      </ul>
    </b-card-text>

    <b-button block href="#" variant="primary">Edit</b-button>
  </b-card>
</template>

<script>
export default {
  name: "ToDoListItem",
  props: {
    id: Number,
    title: String,
    imgUrl: String,
    items: Array,
  },
  data: () => ({
    id: this.props.id,
    title: this.props.title,
    imgUrl: this.props.imgUrl,
    items: this.props.items,
  }),
};
</script>
