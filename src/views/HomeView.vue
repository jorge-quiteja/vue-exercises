<template>
  <v-app class="home">
    <TitleComponent />
    <FormComponent />
    <FilterComponent />
    <ListComponent
      :items="filter !== null ? filteredTodos : todos"
    />
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
    TitleComponent,
    FormComponent,
    FilterComponent,
    ListComponent,
  },
  async beforeCreate() {
    var cached = await JSON.parse(localStorage.getItem("todos"));
    if (cached) {
      this.todos = cached;
    }
  },
  data: () => ({
    todos: [],
    filteredTodos: [],
  }),
  methods: {
    updateCached: async function () {
      await localStorage.removeItem("todos");
      await localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  computed: {
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(filter) {
        this.$store.dispatch("setFilters", filter);
      },
    },
  },
  watch: {
    filter(value) {
      this.filteredTodos = this.todos.filter((item) => {
        if (value === item.progress) {
          return item;
        } else if (value === !item.progress) {
          return item;
        }
      });
    },
  },
};
</script>

<style>
.v-application--wrap {
  min-height: unset;
}
</style>