<template>
  <div>
    <input
      v-model="searchString"
      id="location-input"
      type="text"
      placeholder="Location?"
      @keydown.enter="geocodeSearch(searchString)"
    />
    <button @click="geocodeSearch(searchString)">search</button>
    <div>
      {{ currently.apparentTemperature }}&deg;F
    </div>
    <div>
      <p>{{ locale }}</p>
      <p>Latitude: {{ geometry.latitude }}, Longitude: {{ geometry.longitude }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'SearchField',
  data() {
    return {
      searchString: '',
    };
  },
  computed: {
    ...mapState('location', ['locale', 'geometry']),
    ...mapState('forecast', ['currently']),
  },
  methods: {
    ...mapActions('location', ['geocodeSearch']),
  },
};
</script>
