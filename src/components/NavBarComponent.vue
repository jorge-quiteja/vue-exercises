<template>
  <v-app-bar app dark>
    <div class="align-center justify-space-between">
      <v-img
        alt="Vuetify Logo"
        title="Vuetify Logo"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        width="30"
      />
    </div>
    <div class="d-flex justify-space-between">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBarComponent",
};
</script>

<style scoped>
a {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  margin-left: 2rem;
}

a:visited {
  color: #ffffff;
}
</style>