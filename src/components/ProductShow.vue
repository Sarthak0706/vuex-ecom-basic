<!-- <template>
  <div class="productlisting">
    <h3>Listing All The Products</h3>
    <ul v-for="(product,key) in productlist1" :key="product.id">
      {{key+1}}. {{ product.item_name }} -- {{ product.price }}
    </ul>
  </div>
  <div class="adding-item" style="padding-left:50px">
    <button @click="additem()">Add More Items to cart</button>
  </div>
</template>   

<script>
export default {
  computed: {
    productlist1() {
      return this.$store.state.product;
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
.productlisting{
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: bisque;
}
</style> -->


<template>
  <div class="productlisting">
    <h3>Listing All The Products</h3>
    <ul v-for="(product, key) in productlist1" :key="product.id">
      {{ key + 1 }}. {{ product.item_name }} -- {{ product.price }}
    </ul>
  </div>

  <div class="adding-item" style="padding-left:50px">
    <button @click="additem">Add More Items to cart</button>
  </div>

  <!-- Conditionally show the form -->
  <AddItemForm v-if="showForm" @close-form="showForm = false" />
</template>   

<script>
import AddItemForm from './AddItemForm.vue';

export default {
  components: { AddItemForm },
  data() {
    return {
      showForm: false
    };
  },
  computed: {
    productlist1() {
      return this.$store.state.product;
    }
  },
  methods: {
    additem() {
      this.showForm = true;
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
