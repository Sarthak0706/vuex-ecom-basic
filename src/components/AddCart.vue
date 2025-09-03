<template>
  <div class="cart">
    <h3>Your Cart ({{ cartTotalItems }} items)</h3>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.item_name }} - {{ item.quantity }} × ${{ item.price }} =
        ${{ item.quantity * item.price }}
        <button @click="removeFromCart(item.id)">Remove</button>
      </li>
    </ul>

    <h4>Total: ${{ cartTotalPrice }}</h4>
    <button @click="clearCart">Clear Cart</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartItems', 'cartTotalItems', 'cartTotalPrice'])
  },
  methods: {
    ...mapActions(['removeFromCart', 'clearCart'])
  }
};
</script>

<style scoped>
.cart {
  background: #f0f0f0;
  background-color:pink;
  padding: 10px;
  margin-top: 20px;
}
</style>
