/**
 * Vuex module for all things classes related including reviews
 */

import initialState from "./initialState";
import setter from "../../utils/setter";

// @todo Remove mock data
import mock from "../../mockData";

export default {
  namespaced: true,
  state: initialState(),
  mutations: {
    setter,
  },
  getters: {},
  actions: {
    async getAllBookings({ commit }) {
      // @todo Replace with API call

      commit("setter", ["bookings", mock.bookings]);
    },
  },
};
