<script>
  export default {
    props: {
      cardObject: Object
    },
    data (){
      return {
        // bandiera
        isFlag: true,
        // copertina
        isPoster: true
      }
      
    },

    methods: {
      // bandiera
      getImage (image) {
       return new URL (`../../assets/img/${image}.png`  , import.meta.url).href
      },
      // stelline
      voted() {
        return Math.ceil (this.cardObject.vote_average / 2)
      }
      
    }

  }
</script>

<template>


  <section>
    <div class="col my-col my-2">
        <div class="flip-card  py-2 ">
          <div class="flip-card-inner">
            <div class="flip-card-front ">

              <!-- immagine di copertina -->
              <img  
              v-if="isPoster"  
              @error="isPoster = false"           
              :src="`https://image.tmdb.org/t/p/w342/${cardObject.poster_path}`" 
              :alt="cardObject.name || cardObject.original_title" 
              class="copertina">
              <img 
              v-else
              src="../../assets/img/images.jpeg" 
              :alt="cardObject.name || cardObject.original_title"             
              class="copertina">
            </div>
            <!-- /immagine di copertina -->

            <div class="flip-card-back p-1">
              <h6><strong>Titolo: </strong>{{ cardObject.title ||  cardObject.name}}</h6>
              <p><strong>Titolo originale: </strong>{{ cardObject.original_title ||  cardObject.original_name}}</p>

              <!-- bandiera -->
              <p v-if="isFlag">
                <strong>Lingua: </strong>
                <img 
                :src="getImage(cardObject.original_language)" 
                :alt="cardObject.original_language"
                @error="isFlag = false" 
                class="bandiera"
                >
              </p>
                
                <!-- <img 
                :src="`../../../public/img/${cardObject.original_language}.png`" 
                :alt="cardObject.original_language"
                class="bandiera"> -->                
              
              <p v-else><strong>Lingua: </strong> {{cardObject.original_language}}</p>
              <!-- /bandiera -->

              <!-- voto - stelline -->
              <p><strong>Voto: </strong>
                <span 
                v-for="star in voted()" 
                :key="star">
                  <i class="fa-solid fa-star star"></i>
                </span> 

                <span 
                v-for="star in (5 - voted())" 
                :key="star">
                  <i class="fa-regular fa-star"></i>
                </span> &#10098; {{ cardObject.vote_average}} &#10099;
              </p>
              <!-- /voto - stelline -->

              <!-- trama -->
              <p class="trama"><strong>Trama: </strong>{{ cardObject.overview }}</p>
            </div>
          </div>
        </div>
    </div>


  </section>
</template>



<style lang="scss" scoped>
  @use '../../assets/scss/partials/general';

  .bandiera {
    width: 30px;
  }

  .copertina {
    width: 100%;
    height: 100%;
  }

  .star {
    color: gold;
  }
</style>