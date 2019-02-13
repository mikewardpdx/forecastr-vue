/* eslint-disable no-param-reassign */

import Axios from 'axios';

const SET_FORECAST = 'SET_FORECAST';

const baseUrl = '/darksky';
const darkSkyApiKey = '72cb4b66f2077387dafc4eeff3ac709e';

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
