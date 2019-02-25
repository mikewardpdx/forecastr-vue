/* eslint-disable no-param-reassign */

import Axios from 'axios';

const SET_FORECAST = 'SET_FORECAST';

export default {
  namespaced: true,
  state: {
    currently: {
      apparentTemperature: '12',
    },
  },
  mutations: {
    [SET_FORECAST](state, { currently }) {
      state.currently = currently;
    },
  },
  actions: {
    getForecast: async ({ commit }, { latitude, longitude }) => {
      const { data } = await Axios({
        method: 'POST',
        url: '/.netlify/functions/darksky',
        data: {
          latitude,
          longitude,
        },
      });
      commit('SET_FORECAST', data);
      console.log(data);
    },
  },
};

/* eslint-enable no-param-reassign */
