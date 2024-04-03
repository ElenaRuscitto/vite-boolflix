<script>
  export default {
    props: {
      immagine_copertina: String,
      titolo: String,
      titolo_originale: String,
      lingua: String,
      voto: Number,
      trama: String
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
              <p><strong>Titolo: </strong>{{ titolo }}</p>
              <p><strong>Titolo originale: </strong>{{ titolo_originale }}</p>
              <p><strong>Lingua: </strong>{{ lingua }}</p>
              <p><strong>Voto: </strong>{{ voto }}</p>
              <p><strong>Trama: </strong>{{ trama }}</p>
            </div>
          </div>
        </div>
    </div>


  </section>
</template>



<style lang="scss" scoped>
  @use '../../assets/scss/partials/general';
</style>