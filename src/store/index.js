import Vue from 'vue';
import Vuex from 'vuex';

import forecast from './modules/forecast';
import location from './modules/location';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    forecast,
    location,
  },
  state: {
    count: 0,
  },
});
