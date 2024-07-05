<template>

  <v-app>

    <v-app-bar app :elevation="2" rounded>
      <a href="/">
        <img alt="MovieTime Cinemas" src="@/assets/logo-nav.png" width="170" height="44" />
      </a>
    </v-app-bar>

    <v-main>
      <v-container>
        <!-- Contenido principal de la aplicación -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-layout class="overflow-visible" style="height: 56px;">
    <v-bottom-navigation
      v-model="value"
      :bg-color="color"
      mode="shift"
      class="nav-bottom"
      grow
    >
      <v-btn to="/">
        <v-icon>mdi-home</v-icon>

        <span>Home</span>
      </v-btn>

      <v-btn to="/PeliculasFavoritas">
        <v-icon>mdi-heart</v-icon>

        <span>Favoritos</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
  </v-app>
</template>

<script>

export default {
  data:() => ({ value: 1 }),
    computed: {
      color () {
        switch (this.value) {
          case 0: return 'nav-home'
          case 1: return 'nav-favs'
          default: return 'nav-home'
        }
      },
  },
};
</script>

<style scoped>
.v-main{
  background-image: linear-gradient(rgba(13, 76, 115, 0.85), rgba(13, 76, 115, 1)), url(@/assets/fondo-main.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 95vh;
}

.v-toolbar__content{
    position: relative;
    width: 100%;

}

.v-app-bar.v-toolbar {
  background-color: #172940;
  color: #E8EAEC;
}

img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.overflow-visible{
  position: absolute;
}

.nav-bottom{
  position: fixed !important;
  right: 0;
  bottom: 0;
  z-index: 99999 !important;
}

</style>
