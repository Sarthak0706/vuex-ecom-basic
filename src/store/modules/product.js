export default {
  namespaced: true,  // Enables module namespace
  state: {
    product: [
      { id: 1, item_name: "Remote Control Car", price: 10 },
      { id: 2, item_name: "Teddy Bear", price: 20 },
      { id: 3, item_name: "Coffee Mug", price: 30 }
    ]
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
    }
  },
  getters: {
    allProducts: (state) => state.product
  }
}
