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
    <div>
        <h2>Films</h2>
    </div>
    <div class="row row-cols-5 ">
     
      <Movies v-for="element in store.toMovies" 
      :key="element.id"
      :image="backdrop_path"
      :images="poster_path"
      :titolo="element.title"
      :titolo_originale="element.original_title"
      :lingua="element.original_title"
      :voto="element.vote_average"
      :trama="element.overview"/>
     
    </div>

    <div>
        <h2>Serie TV</h2>
    </div>
    <div class="row row-cols-5 ">
     
      <Series />
    </div>
   
  </div>
  
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;



</style>