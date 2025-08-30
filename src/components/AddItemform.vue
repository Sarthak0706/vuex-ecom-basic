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
      <button type="button" @click="$emit('close-form')">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemName: "",
      itemPrice: "",
      itemId: ""
    };
  },
  methods: {
    submitForm() {
      const newItem = {
        id: this.itemId,
        item_name: this.itemName,
        price: this.itemPrice
      };
      this.$store.dispatch('addItem', newItem); // Send to Vuex
      this.$emit('close-form'); // Close form after adding
    }
  }
};
</script>
