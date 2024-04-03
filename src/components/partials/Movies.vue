<script>
  export default {
    props: {
   
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
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="" alt="Avatar" style="width:200px;height:300px;">
            </div>
            <div class="flip-card-back">
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