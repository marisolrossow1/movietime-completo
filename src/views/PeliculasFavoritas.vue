<template>
  <div>
    <h2>Favoritos</h2>
    <div v-if="peliculas.length">
      <PeliculaCard
        v-for="pelicula in peliculas"
        :key="pelicula.id"
        :pelicula="pelicula"
      />
    </div>
    <div v-else>
        <v-alert
        color="danger"
        icon="mdi-alert"
        theme="dark"
        border
      >
        No tiene ninguna pelicula agregada en favoritos. Anímate a buscar películas y guardalas en favoritos...
      </v-alert>
    </div>
  </div>
</template>

<script>
import PeliculaCard from '../components/PeliculaCard.vue';

export default {
  components: {
    PeliculaCard,
  },
  data() {
    return {
      peliculas: [],
    };
  },
  methods: {
    getPeliculasFavoritas() {
      let peliculasFavoritas = JSON.parse(localStorage.getItem('peliculasFavoritas')) || [];

      this.peliculas = peliculasFavoritas;
    //   console.log(peliculasFavoritas)
      console.log(this.peliculas)
    }
  },
  created() {
    this.getPeliculasFavoritas();
  },
};
</script>

<style scoped>
.v-alert{
  margin-top: 1rem;
}
</style>
