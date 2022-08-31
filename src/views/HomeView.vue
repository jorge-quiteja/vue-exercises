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
  async beforeCreate() {
    var cached = await JSON.parse(localStorage.getItem("todos"));
    if (cached) {
      // this.todos = cached;
      return;
    }
  },
  data: () => ({
    // todos: [],
    // filteredTodos: [],
  }),
  methods: {
    // updateCached: async function () {
    //   await localStorage.removeItem("todos");
    //   await localStorage.setItem("todos", JSON.stringify(this.todos));
    // },
  },
  computed: {
  },
  watch: {
  },
};
</script>

<style>
.v-application--wrap {
  min-height: unset;
}
</style>