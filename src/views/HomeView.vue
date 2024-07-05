<template>
    <HeaderBusqueda v-on:search="buscarPeliculas" />
    <GenerosLista v-on:genero-seleccionado="getPeliculasPorGenero" />
    <v-container>
      <div v-if="peliculas.length === 0">
        <h2>Películas Populares</h2>
        <v-slide-group show-arrows>
          <v-slide-item
            v-for="pelicula in peliculasPopulares"
            :key="pelicula.id"
          >
            <PeliculaCard :pelicula="pelicula" class="card-peliculasPopulares" />
          </v-slide-item>
        </v-slide-group>
      </div>

      <v-row v-else>
        <v-col
          v-for="pelicula in peliculas" 
          :key="pelicula.id"
          cols="12"
          lg="3"
          md="4"
          sm="6"
        >
          <PeliculaCard :pelicula="pelicula" />
        </v-col>
      </v-row>
    </v-container>
</template>


<script>
import PeliculaCard from '../components/PeliculaCard.vue';
import GenerosLista from '../components/GenerosLista.vue';
import HeaderBusqueda from '../components/HeaderBusqueda.vue';

export default {
  components: {
    PeliculaCard,
    GenerosLista,
    HeaderBusqueda,
  },
  data() {
    return {
      peliculasPopulares: [],
      peliculas: [],
    };
  },
  methods: {
    async getPeliculasPopulares() {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=es&api_key=22645a72c50e8c80af92c5c26d6aeace');
      const data = await response.json();
      this.peliculasPopulares = data.results;
    },
    async buscarPeliculas(query) {
      const apiKey = '22645a72c50e8c80af92c5c26d6aeace';
      let url = `https://api.themoviedb.org/3/search/movie?language=es&query=${query}&api_key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.peliculas = data.results;
      } catch (error) {
        console.error('Error al buscar películas:', error);
      }
    },
    async getPeliculasPorGenero(idGenero) {
      if (!idGenero) return;

      const apiKey = '22645a72c50e8c80af92c5c26d6aeace';
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es&with_genres=${idGenero}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('ID del género seleccionado:', idGenero);
        console.log('Películas obtenidas:', data.results);
        this.peliculas = data.results;
      } catch (error) {
        console.error('Error al obtener películas por género:', error);
      }
    }
  },
  created() {
    this.getPeliculasPopulares();
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Orbitron:wght@400..900&family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Orbitron:wght@400..900&family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap');

.v-card-title{
    font-family: "Orbitron", sans-serif;
}

body{
    font-family: "Inter", sans-serif;
}
body{
  background: #0D4A70 !important;
}

h2{
  font-size: 2rem;
  color: white;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 0.2rem;
  text-align: center;
}

.v-container{
  margin-top: 1rem;
}

.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.mx-auto {
  margin-right: 1rem !important;
}

.card-peliculasPopulares{
  min-width: 25rem !important;
}

.mdi-chevron-right::before, .mdi-chevron-left::before{
  color: white !important;
}

@media screen and (max-width:576px){
  .v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.mx-auto {
  margin-right: 0.2rem !important;
}

.card-peliculasPopulares{
  min-width: 20rem !important;
}

.v-slide-group__next, .v-slide-group__prev{
  display: none !important;
}

}
</style>
