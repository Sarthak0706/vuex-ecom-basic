<template>
  <div class="form-container">
    <h3>Update Item</h3>
    <form @submit.prevent="submitForm">
      <label>Item Name:</label>
      <input v-model="formData.item_name" type="text" required />

      <label>Item Price:</label>
      <input v-model="formData.price" type="text" required />

      <button type="submit">Update Item</button>
      <button type="button" @click="$emit('close-form')">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      formData: { ...this.item }
    };
  },
  methods: {
    submitForm() {
      this.$emit('update-item', this.formData);
    }
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f3f3f3;
  padding: 15px;
  border-radius: 10px;
}
</style>
  