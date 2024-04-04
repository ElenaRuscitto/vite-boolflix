<script>
  export default {
    props: {
      cardObject: Object
    }

  }
</script>

<template>


  <section>
    <div class="col">
        <div class="flip-card  py-2 ">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="" alt="Titolo" style="width:250px;height:350px;">
            </div>
            <div class="flip-card-back p-2">
              <p><strong>Titolo: </strong>{{ cardObject.title ||  cardObject.name}}</p>
              <p><strong>Titolo originale: </strong>{{ cardObject.original_title ||  cardObject.original_name}}</p>
              <p><strong>Lingua: </strong>{{ cardObject.original_language }}</p>
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
</style>