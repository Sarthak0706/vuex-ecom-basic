<template>
  <div class="form-container">
    <h3>Add New Item</h3>
    <form @submit.prevent="submitForm">
      <label>Item Name:</label>
      <input v-model="itemName" type="text" required />

      <label>Item Price:</label>
      <input v-model.number="itemPrice" type="number" required />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      itemName: "",
      itemPrice: ""
    };
  },
  computed: {
    ...mapState('product', ['product'])
  },
  methods: {
   ...mapActions('product', ['addItem']),
    submitForm() {
      const nextId = this.product.length > 0 ? Math.max(...this.product.map(item => item.id)) + 1 : 1;
      const newItem = {
        id: nextId,
        item_name: this.itemName,
        price: Number(this.itemPrice)
      };

      this.addItem(newItem);
      this.itemName = "";
      this.itemPrice = "";
    }
  }
};
</script>

<style scoped>
.form-container {
  background: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
  max-width: 300px;
  margin: auto;
}
</style>
