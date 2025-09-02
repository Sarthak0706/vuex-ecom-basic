<template>
  <div class="productlisting">
    <h3>Listing All The Products</h3>
    <ul v-for="(product2, key) in product" :key="product2.id">
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
import {mapState,mapActions} from 'vuex';
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
    // productlist1() {
    //   return this.$store.getters.allProducts;
    // }
  },
  methods: {
    ...mapActions(['addItem', 'updateItem', 'deletedItem']),
    additem() {
      this.showform = true;
    },
    openUpdateForm(product) {
      this.selectedItem = { ...product };
      this.showUpdateForm = true;
    },
    updateitems(updatedItem) {
      this.updateItem(updatedItem);
      this.showUpdateForm = false;
    },
    deleteitem(id)
    {
      this.deletedItem(id);
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
