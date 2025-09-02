<template>
  <div class="form-container">
    <h3>Add New Item</h3>
    <form @submit.prevent="submitForm">
      <label>Item Name:</label>
      <input v-model="itemName" type="text" required />

      <label>Item Price:</label>
      <input v-model="itemPrice" type="text" required />

      <label>Item ID:</label>
      <input v-model="itemId" type="number" required />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      itemName: "",
      itemPrice: "",
      itemId: ""
    };
  },
  methods: {
    ...mapActions(['addItem']),
    submitForm() {
      const newItem = {
        id: this.itemId,
        item_name: this.itemName,
        price: this.itemPrice
      };
      this.addItem(newItem); 
      this.itemName="";
      this.itemPrice="";
      this.itemId="";
    }
  }
};
</script>
