<template>
  <v-app class="home">
    <TitleComponent />
    <FormComponent />
    <FilterComponent />
    <ListComponent />
  </v-app>
</template>

<script>
import TitleComponent from "../components/TitleComponent";
import FormComponent from "../components/FormComponent.vue";
import FilterComponent from "../components/FilterComponent.vue";
import ListComponent from "../components/ListComponent.vue";

export default {
  name: "HomeView",
  components: {
    FormComponent,
    TitleComponent,
    FilterComponent,
    ListComponent,
  },
};
</script>

<style>
.v-application--wrap {
  min-height: unset;
}
</style>