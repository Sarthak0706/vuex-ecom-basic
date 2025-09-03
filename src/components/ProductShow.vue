
<template>
  <div class="productlisting">
    <h3>Listing All The Products</h3>
    <ul v-for="(item, index) in product" :key="item.id">
      {{ index + 1 }}. {{ item.item_name }} -- ${{ item.price }}
      <button @click="openUpdateForm(item)">Update</button>
      <button @click="deletedItem(item.id)">Delete</button>
      <button @click="addToCart(item)">Add To Cart</button>
    </ul>

    <div class="adding-item">
      <button @click="showform = true">Add More Items</button>
    </div>

    <AddItemForm v-if="showform" />
    <UpdateItemForm
      v-if="showUpdateForm"
      :item="selectedItem"
      @update-item="updateItem"
      @close-form="showUpdateForm = false"
    />
  </div>
</template>

<script>
import AddItemForm from './AddItemForm.vue';
import UpdateItemForm from './UpdateItemForm.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: { AddItemForm, UpdateItemForm },
  data() {
    return {
      showform: false,
      showUpdateForm: false,
      selectedItem: null
    };
  },
  computed: {
    ...mapState(['product'])
  },
  methods: {
    ...mapActions(['updateItem', 'deletedItem', 'addToCart']),
    openUpdateForm(item) {
      this.selectedItem = { ...item };
      this.showUpdateForm = true;
    }
  }
};
</script>

<style scoped>
.adding-item {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.productlisting {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: bisque;
}
</style>
