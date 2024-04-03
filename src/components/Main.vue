<script>
import {store} from '../data/store';
import Movies from './partials/Movies.vue';
import Series from './partials/Series.vue';

export default {
    components: {
      Movies,
      Series
    },
  
    data(){
      return {
        store,
      }
    }
  }
</script>


<template>
  <div class="container">
    <div class="row row-cols-6 ">
      <div>
        <h2>Films</h2>
      </div>
      <Movies v-for="element in store.toMovies" />
      <Series />
    </div>
   
  </div>
  
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;



</style>