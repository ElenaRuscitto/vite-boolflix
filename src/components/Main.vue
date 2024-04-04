<script>
import {store} from '../data/store';
import Card from './partials/Card.vue';

export default {
    components: {
      Card
     
    },

    props: {
      type: String
    },
  
    data(){
      return {
        store,
      }
    },

    computed: {
      title() {
        return this.type === 'movie' ? ' Film' : 'Serie TV'
      }
    }
  }
</script>


<template>
  <div class="container">
    <div>
        <h2>{{ title }}</h2>
    </div>
    <div class="row row-cols-4 ">
     
      <Card v-for="element in store[type]" 
      :key="element.id"
      :cardObject="element"/>
     
    </div>

    
   
  </div>
  
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;



</style>