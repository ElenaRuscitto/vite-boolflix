<script>
  export default {
    props: {
      cardObject: Object
    },
    data (){
      return {
        isPosted: true
      }
      
    },

    methods: {
      
      
    }

  }
</script>

<template>


  <section>
    <div class="col">
        <div class="flip-card  py-2 ">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img  
              v-if="isPosted"  
              @error="isPosted = false"           
              :src="`https://image.tmdb.org/t/p/w342/${cardObject.poster_path}`" 
              :alt="cardObject.name || cardObject.original_title" 
              class="copertina">
              <img 
              v-else
              src="../../assets/img/images.jpeg" 
              :alt="cardObject.name || cardObject.original_title"             
              class="copertina">
            </div>
            <div class="flip-card-back p-2">
              <h6><strong>Titolo: </strong>{{ cardObject.title ||  cardObject.name}}</h6>
              <p><strong>Titolo originale: </strong>{{ cardObject.original_title ||  cardObject.original_name}}</p>
              <p>
                <strong>Lingua: </strong>
                <img 
                :src="`../../../public/img/${cardObject.original_language}.png`" 
                :alt="cardObject.original_language"
                class="bandiera">

                
              </p>
              <p><strong>Voto: </strong>{{ cardObject.vote_average }}</p>
              <p><strong>Trama: </strong>{{ cardObject.overview }}</p>
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
    object-fit: cover;
  }
</style>