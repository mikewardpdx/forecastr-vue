/* eslint-disable no-param-reassign */

import Axios from 'axios';

const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
const apiKey = 'pk.eyJ1IjoibWlrZXdhcmRwZHgiLCJhIjoiY2psemZtbGh6MTR2ajNvbzU2ZmxmMzN3bSJ9.C2kOMKYaiRFfalurIa0tmA';

const SET_LOCALE = 'SET_LOCALE';

export default {
  namespaced: true,
  state: {
    locale: 'Portland, OR',
    latitude: 45.5202,
    longitude: -122.6742,
  },
  mutations: {
    [SET_LOCALE](state, { locale, latitude, longitude }) {
      state.locale = locale;
      state.latitude = latitude;
      state.longitude = longitude;
    },
  },
  actions: {
    geocodeSearch: async (context, payload) => {
      const { data } = await Axios.get(`${baseUrl}/${payload}.json?types=place&limit=1&access_token=${apiKey}`);

      context.commit('SET_LOCALE', {
        locale: data.features[0].place_name,
        latitude: data.features[0].geometry.coordinates[1],
        longitude: data.features[0].geometry.coordinates[0],
      });
    },
  },
};

/* eslint-enable no-param-reassign */
