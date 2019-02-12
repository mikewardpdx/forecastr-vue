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
    <p>{{ locale }}</p>
    <p>Latitude: {{ latitude }}, Longitude: {{ longitude }}</p>
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
    ...mapState('location', ['locale', 'latitude', 'longitude']),
  },
  methods: {
    ...mapActions('location', ['geocodeSearch']),
  },
};
</script>
