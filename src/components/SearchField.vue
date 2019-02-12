<template>
  <div>
    <input
      v-model="searchString"
      id="location-input"
      type="text"
      placeholder="Location?"
      @keydown.enter="searchLocation"
    />
    <button @click="searchLocation">search</button>
    <p>{{ locale }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SearchField',
  data() {
    return {
      searchString: '',
    };
  },
  computed: {
    ...mapState('location', ['locale']),
  },
  methods: {
    searchLocation() {
      // console.log(this.searchString);
    },
  },
};
</script>
