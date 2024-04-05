<script>
import {store} from '../../data/store';
import Card from './Card.vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/free-mode';
  import 'swiper/css/pagination';

  // import './style.css';

  // import required modules
  import { FreeMode, Pagination } from 'swiper/modules';

export default {
    components: {
      Card,
      Swiper,
      SwiperSlide,
     
    },
  
    data(){
      return {
        store,
        modules: [FreeMode, Pagination],
      }
    },


  }
</script>


<template>

<h2>Most Popular</h2>

  <swiper
      :slidesPerView="5"
      :spaceBetween="50"
      :freeMode="true"
      :pagination="{ clickable: true, }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(element, indice) in store.popArray">
         <Card :cardObject="element"/>
      </swiper-slide>
      <!-- <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide> -->
  </swiper>
     

  
</template>


<style lang="scss" scoped>


#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 350px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  // background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullets.swiper-pagination-horizontal {
  // color: red !important;
  bottom: red, 8px !important;
}
</style>