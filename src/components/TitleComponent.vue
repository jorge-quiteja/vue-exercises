<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          alt="Vue Logo"
          title="Vue Logo"
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify ToDo <br />
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TitleComponent",
};
</script>