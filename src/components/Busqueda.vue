<template>

  <v-card
    class="mx-auto"
    color="surface-light"
  >
    <v-card-text>
      <v-text-field
      v-model="query"
        :loading="loading"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Buscar película por Título..."
        variant="solo"
        hide-details
        single-line
        @click:append-inner="onClickAndSearch"
      ></v-text-field>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  data() {
    return {
        query: '',
        loaded: false,
        loading: false,
    };
  },
  methods: {
    onClickAndSearch() {
      this.onClick();
      this.search();
    },
    search() {
      this.$emit('search', this.query);
    },
    onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
    },
    
  }
};
</script>

<style scoped>
.v-card{
  max-width: 100%;
  width: 100%;
  margin: 0rem;
}

.i.mdi-magnify.mdi.v-icon.notranslate.v-theme--light.v-icon--size-default.v-icon--clickable{
  color: #172940 !important;
}

.v-field__prepend-inner > .v-icon, .v-field__append-inner > .v-icon, .v-field__clearable > .v-icon{
  opacity: 1 !important;
}

.v-card-text{
  background-color: #172940;
}

</style>