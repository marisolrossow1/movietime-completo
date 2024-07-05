<template>
  <div v-if="pelicula">
    <v-card class="mx-auto" max-width="344">
      <v-img v-bind:src="'https://image.tmdb.org/t/p/w500' + pelicula.poster_path" v-bind:alt="pelicula.title"></v-img>

      <v-card-title>
        {{ pelicula.title }}
      </v-card-title>

      <v-card-subtitle> Año:
        {{ pelicula.release_date }}
      </v-card-subtitle>

      <v-card-subtitle> Géneros:
        <span v-for="(genre, indice) in pelicula.genres" :key="genre.id">
        {{ genre.name }}{{ indice < pelicula.genres.length - 1 ? ', ' : '' }}
        </span>
      </v-card-subtitle>

      <v-card-text>
        {{ pelicula.overview }}
      </v-card-text>

      <div v-if="!peliculaExiste">
      <v-btn
        class="text-none"
        prepend-icon="mdi-heart"
        variant="flat"
        border
        v-on:click="agregarAFavoritos"
      >
        Agregar a favoritos
      </v-btn>
    </div>

    <div v-else>
      <v-alert
        color="danger"
        icon="mdi-alert"
        theme="dark"
        border
      >
        Esta película ya está agregada a favoritos, intenta agregar otra.
      </v-alert>

      <v-btn
        class="text-none"
        prepend-icon="mdi-heart-broken"
        variant="flat"
        border
        v-on:click="quitarDeFavoritos"
      >
        Quitar de favoritos
      </v-btn>
    </div>

    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      pelicula: null,
      peliculaExiste: false
    };
  },
  methods: {
    async getPeliculaDetalle() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?language=es&api_key=22645a72c50e8c80af92c5c26d6aeace`);
      const data = await response.json();
      this.pelicula = data;
      this.getExistePelicula();
    },
    getExistePelicula() {
      let peliculasFavoritas = JSON.parse(localStorage.getItem('peliculasFavoritas')) || [];
      this.peliculaExiste = peliculasFavoritas.some(pelicula => pelicula.id === this.pelicula.id);
    },
    agregarAFavoritos() {
      let peliculasFavoritas = JSON.parse(localStorage.getItem('peliculasFavoritas')) || [];

      const existePelicula = peliculasFavoritas.some(pelicula => pelicula.id === this.pelicula.id);

      if (!existePelicula) {
        peliculasFavoritas.push(this.pelicula);
        localStorage.setItem('peliculasFavoritas', JSON.stringify(peliculasFavoritas));
        this.peliculaExiste = true; // Actualizar el estado de peliculaExiste
      } else {
        console.error("Esta peli ya la agregaste");
      }
    },
    quitarDeFavoritos(){
        let peliculasFavoritas = JSON.parse(localStorage.getItem('peliculasFavoritas')) || [];

        const index = peliculasFavoritas.findIndex(pelicula => pelicula.id === this.pelicula.id);

        if (index !== -1) {
            peliculasFavoritas.splice(index, 1);

            localStorage.setItem('peliculasFavoritas', JSON.stringify(peliculasFavoritas));

            this.getPeliculaDetalle();
        }
    }
  },
  created() {
    this.getPeliculaDetalle();
  },
};
</script>

<style scoped>

.v-card{
  background-color: #D9B855;
}

button{
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;
  background-color: #0D4A70;
  color: #E8EAEC;
}

.v-alert{
  margin-bottom: 1rem;
}

.v-card-subtitle{
  opacity: 1;
}
</style>