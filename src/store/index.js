import Vue from "vue";
import Vuex from "vuex";
import { CONSTANTS } from "../config/constants";

Vue.use(Vuex);

const initialState = {
  blocks: [],
};

export default new Vuex.Store({
  state: () => {
    let state = window.localStorage.getItem(
      CONSTANTS.INITIAL_STATE_LOCAL_STORAGE
    );
    if (state) {
      try {
        state = JSON.parse(state);
        return state;
      } catch (err) {}
    }
    return initialState;
  },
  getters: {
    activeBlocks: (state) => state.blocks.filter((block) => block.isRemoved),
  },
  mutations: {
    [CONSTANTS.ACTIONS.SAVE_STATE]: (state) => {
      window.localStorage.setItem(
        CONSTANTS.INITIAL_STATE_LOCAL_STORAGE,
        JSON.stringify(state)
      );
    },
  },
  actions: {
    [CONSTANTS.ACTIONS.SAVE_STATE]: ({ commit, state }) => {
      commit(CONSTANTS.ACTIONS.SAVE_STATE, state);
    },
  },
  modules: {},
});
