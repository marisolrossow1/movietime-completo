<template>
    <v-sheet>
      <v-chip-group mandatory color="red">
        <v-chip 
          v-for="genero in generos"
          :key="genero.id"
          v-on:click="seleccionarGenero(genero.id)"
        >
          {{ genero.name }}
        </v-chip>
      </v-chip-group>
    </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      generos: [],
    };
  },
  methods: {
    async getGeneros() {
      const apiKey = '22645a72c50e8c80af92c5c26d6aeace';
      const url = `https://api.themoviedb.org/3/genre/movie/list?language=es&api_key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.generos = data.genres;
      } catch (error) {
        console.error('Error al obtener géneros:', error);
      }
    },
    seleccionarGenero(idGenero) {
      this.$emit('genero-seleccionado', idGenero);
    },
  },
  created() {
    this.getGeneros();
  },
};
</script>

<style scoped>
.v-sheet{
  padding-top: 1rem !important;
  padding-block: 0.5rem;
  background-color: transparent;
}

.v-chip{
  transition: all 300ms ease;
  cursor: default;
  background-color: #081930;
  color: white;
  opacity: 1 !important;
}

.v-chip:active, .v-chip:hover{
  background-color: #ff0015;
}

</style>