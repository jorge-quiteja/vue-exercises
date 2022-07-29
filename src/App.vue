<template>
  <div id="app">
    <NavBarComponent />
    <v-main>
      <v-card width="600">
        <router-view />
      </v-card>
    </v-main>
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'

export default {
  components: {
    NavBarComponent
  }
}
</script>

<style>
.v-card {
  margin: 2.5% auto;
  padding: 20px;
}
.align-center{ 
  text-align: center;
}
</style>
