<script>
import {store} from '../data/store';

export default {
  data(){
      return {
        store,
      }
  },
  methods: {

  }
}
</script>


<template>
  <header>
  <div class="container d-flex justify-content-between">
    <div>
      <h1>BOOLFLIX</h1>
    </div>
    <div class="d-flex">
      <input 
      v-model.trim="store.apiParams.query"
      @keyup.enter="$emit('toSearch')" 
      type="text" 
      class="form-control w-100 "
      placeholder="Fai la tua ricerca">

      <button
      @click="$emit('toSearch')"
       class="btn btn-danger"
      >Cerca</button>
    </div>
  </div>
  </header>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;

header {
  background-color: $color-black;
  color: $color-red;
 
  input {
    margin: 10px;
   
  }
  .btn {
    height: 40px;
    margin-top: 10px ;
    background-color: $color-red !important;
    color: $color-black;
    
  }
}


</style>