// src/store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    likedDesigners: [], 
  },
  mutations: {
    addLikedDesigner(state, designerId) {
      state.likedDesigners.push(designerId);
    },
    removeLikedDesigner(state, designerId) {
      state.likedDesigners = state.likedDesigners.filter(id => id !== designerId);
    },
  },
});
