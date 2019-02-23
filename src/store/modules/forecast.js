/* eslint-disable no-param-reassign */

import Axios from 'axios';

const SET_FORECAST = 'SET_FORECAST';

const baseUrl = process.env.NODE_ENV
  === 'production' ? 'https://api.darksky.net/forecast' : '/darksky';
const darkSkyApiKey = process.env.VUE_APP_DARK_SKY_API_KEY;

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
      const { data } = await Axios.get(`${baseUrl}/${darkSkyApiKey}/${latitude},${longitude}`);

      commit('SET_FORECAST', data);

      console.log(data);
    },
  },
};

/* eslint-enable no-param-reassign */
