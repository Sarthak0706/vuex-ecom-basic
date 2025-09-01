<template>
  <div class="productlisting">
    <h3>Listing All The Products</h3>
    <ul v-for="(product2, key) in productlist1" :key="product2.id">
      {{ key + 1 }}. {{ product2.item_name }} -- {{ product2.price }}
      <button @click="openUpdateForm(product2)">Update Item</button>
      <button @click="deleteitem(product2.id)">Delete Item</button>
    </ul>
  </div>

  <div class="adding-item" style="padding-left:50px">
    <button @click="additem">Add More Items to cart</button>
  </div>

  <div>
    <AddItemForm v-if="showform" />
  </div>
  <div>
    <UpdateItemForm
      v-if="showUpdateForm"
      :item="selectedItem"
      @update-item="updateitems"
      @close-form="showUpdateForm = false"
    />
  </div>
</template>

<script>
import AddItemForm from './AddItemForm.vue';
import UpdateItemForm from './UpdateItemForm.vue';

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
    productlist1() {
      return this.$store.getters.allProducts;
    }
  },
  methods: {
    additem() {
      this.showform = true;
    },
    openUpdateForm(product) {
      this.selectedItem = { ...product };
      this.showUpdateForm = true;
    },
    updateitems(updatedItem) {
      this.$store.dispatch('updateItem', updatedItem);
      this.showUpdateForm = false;
    },
    deleteitem(id)
    {
      this.$store.dispatch('deletedItem',id);
    }
  }
};
</script>

<style scoped>
.adding-item {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.productlisting {
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: bisque;
}
</style>
