import { createStore } from 'vuex';

export default createStore({
  state: {
    product: [
      { id: 1, item_name: "Remote Control Car", price: 10 },
      { id: 2, item_name: "Teddy Bear", price: 20 },
      { id: 3, item_name: "Coffee Mug", price: 30 }
    ],
    cart: []
  },

  mutations: {
    ADD_ITEM(state, newItem) {
      state.product.push({ ...newItem, id: Date.now() });
    },
    UPDATE_ITEM(state, updatedItem) {
      const index = state.product.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        state.product[index] = { ...updatedItem };
      }
    },
    DELETE_ITEM(state, itemId) {
      state.product = state.product.filter(item => item.id !== itemId);
    },

    ADD_TO_CART(state, product) {
      const existingItem = state.cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    UPDATE_CART_ITEM_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    CLEAR_CART(state) {
      state.cart = [];
    }
  },

  actions: {

    addItem({ commit }, newItem) {
      commit('ADD_ITEM', newItem);
    },
    updateItem({ commit }, updatedItem) {
      commit('UPDATE_ITEM', updatedItem);
    },
    deletedItem({ commit }, itemId) {
      commit('DELETE_ITEM', itemId);
    },
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
    updateCartItemQuantity({ commit }, payload) {
      commit('UPDATE_CART_ITEM_QUANTITY', payload);
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    }
  },

  getters: {

    allProducts: (state) => state.product,
    cartItems: (state) => state.cart,
    cartTotalItems: (state) =>
      state.cart.reduce((total, item) => total + item.quantity, 0),
    cartTotalPrice: (state) =>
      state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }
});
