<template>
<div class="contenedor">
    <v-responsive aspect-ratio="16/9" style="max-width: 100%">
        <v-img v-bind:src="myImage" alt="Pochoclos, pelis, cámara arriba del título" class="img-header"></v-img>
    </v-responsive>
    <h2 class="text-center text-white mt-4">¿Qué quieres encontrar?</h2>
    <p class="text-center fw-light text-white">Descubre películas de todos los géneros para ver...</p>
</div>
<div>
    <Busqueda @search="emitBusqueda" />
</div>
</template>

<script>
import myImage from '@/assets/deco-busqueda.png';
import Busqueda from '../components/Busqueda.vue';
export default {
    components: {
        Busqueda,
    },
    data() {
        return {
            myImage: myImage
        };
    },
    methods: {
    emitBusqueda(query) {
      this.$emit('search', query);
    },
  },
};
</script>

<style scoped>

.contenedor{
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.img-header {
  max-width: auto; 
  max-height: 120px;
  margin-left: auto;
  margin-right: auto;
  filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.5))
  drop-shadow(3px 3px 10px rgba(255, 0, 0, 0.6))
  drop-shadow(6px 6px 18px rgba(255, 217, 0, 0.5));
  z-index: 1;
}

p{
    font-size: 16px;
}

</style>