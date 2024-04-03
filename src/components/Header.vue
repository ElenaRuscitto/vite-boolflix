<script>
import {store} from '../data/store';

export default {
  data(){
      return {
        store,
       
      }
  },
}
</script>


<template>
  <header>
  <div class="container d-flex justify-content-between">
    <div>
      <h1>BOOLFLIX</h1>
    </div>
    <div class="d-flex">
      <input type="text" class="form-control w-100 ">
      <button class="btn btn-danger">Cerca</button>
    </div>
  </div>
  </header>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;

header {
  background-color: black;
  color: red;
  line-height: 70px;
  input {
    margin: 10px;
  }
  .btn {
    height: 40px;
    margin-top: 10px ;
  }
}


</style>