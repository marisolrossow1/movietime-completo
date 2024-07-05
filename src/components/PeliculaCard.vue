<template>
  <v-card class="mx-auto" max-width="344">
    <v-img v-bind:src="posterSource" alt="Poster"></v-img>

    <v-card-title>
      {{ pelicula.title }}
    </v-card-title>

    <v-card-actions>
      <v-btn v-bind:href="`/detalles/${pelicula.id}`">Ver más</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    pelicula: Object,
  },
  computed: {
    posterSource() {
      if (this.pelicula.poster_path) {
        return `https://image.tmdb.org/t/p/w500${this.pelicula.poster_path}`;
      } else {
        return '/src/assets/poster-not-found.jpg';
      }
    },
  },
};
</script>

<style scoped>
.v-card{
  margin-top: 30px;
  background-color: #D9B855;
}

.v-card-title{
  text-align: center;
  margin-bottom: 0.5rem;
}

.v-btn{
  background-color: #0D4A70 !important;
  color: #E8EAEC;
  margin-left: auto;
  margin-right: auto;
}
</style>


