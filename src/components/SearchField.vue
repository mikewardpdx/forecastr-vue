<template>
  <div>
    <input type="text" placeholder="Location?" @keydown.enter="searchLocation" v-model="searchString" />
    <button @click="searchLocation">search</button>
  </div>
</template>

<script>
export default {
  name: 'SearchField',
  methods: {
    searchLocation() {
      alert(this.searchString)
    }
  }
};
</script>
