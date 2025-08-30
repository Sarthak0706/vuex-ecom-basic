
import { createStore } from 'vuex';

export default createStore({
  state: {
    product: [
      { id: 1, item_name: "Remote Control Car", price: "$10" },
      { id: 2, item_name: "Teddy Bear", price: "$20" },
      { id: 3, item_name: "Coffee Mug", price: "$30" }
    ]
  },
  mutations: {
    ADD_ITEM(state, newItem) {
      state.product.push(newItem);
    }
  },
  actions: {
    addItem({ commit }, newItem) {
      commit('ADD_ITEM', newItem);
    }
  }
});
