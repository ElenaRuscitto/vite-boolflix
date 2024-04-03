<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import axios from 'axios';
import {store} from './data/store'; 

export default {
    components: {
      Header,
      Main,
      Footer
    },

    data(){
      return {
        axios,
        store

      }
    },
    methods:{
      getApi(){
        axios.get(this.store.apiUrl, {
          params: this.store.queryParams
        })

        .then(response => {
          console.log(response.data.results);
          console.log(response);
          //  associo l'array toMovies 
          store.toMovies = response.data.results;
        })

        .catch (error => {
          console.log(error);
        })
      }
    },
    mounted() {
      this.getApi();

    }
  }

</script>




<template>
  <Header @reserchInput="getApi" />
  <Main />
  <Footer />

</template>



<style lang="scss">
  @use './assets/scss/main.scss';
</style>