<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';
import {store} from './data/store'; 

export default {
    components: {
      Header,
      Main,
    },

    data(){
      return {
        axios,
        store

      }
    },
    methods:{
      getApi(type){
        axios.get(store.apiUrl + type, {
          params: store.apiParams
        })
        // faccio la chiamata dei film e serie
        .then(response => {
          console.log(response.data.results);
          console.log(response);
          //  associo l'array  
          store[type] = response.data.results;
          
        })

        .catch (error => {
          console.log(error);
        })
      },
      toSearch () {
        this.getApi('movie')
        this.getApi('tv')
      }
    },
    mounted() {
      this.toSearch();

    }
  }

</script>




<template>
  <Header @toSearch="toSearch" />
  <Main type="movie" v-if="store.movie.length > 0"/>
  <Main type="tv" v-if="store.tv.length > 0"/>

</template>



<style lang="scss">
  @use './assets/scss/main.scss';
</style>