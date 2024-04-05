<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';
import {store} from './data/store'; 
import Swiper from './components/partials/Swiper.vue';

export default {
    components: {
      Header,
      Main,
      Swiper
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
      },

      // SWIPER
      getApiPop(){
        axios.get(store.apiUrlPop, {
          params: store.apiParamsPop
        })
        // faccio la chiamata
        .then(response => {
          console.log(response.data.results);
          console.log("-------store.popArray",store.popArray);
          //  associo l'array  
          store.popArray = response.data.results;
          console.log("-------store.popArray",store.popArray);
        })

        .catch (error => {
          console.log(error);
        })
      },

    },
    mounted() {
      this.getApiPop();
      this.toSearch();
    }
  }

</script>




<template>
  <Header @toSearch="toSearch" />

  <div class="container">
    <Swiper v-if="store.movie.length == 0 && store.tv.length == 0"/>
  </div>
  
  <Main type="movie" v-if="store.movie.length > 0" class="my-3"/>
  <Main type="tv" v-if="store.tv.length> 0" class="my-5"/>

</template>



<style lang="scss">
  @use './assets/scss/main.scss';
</style>