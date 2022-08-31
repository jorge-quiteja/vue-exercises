<template>
  <v-container class="d-flex justify-space-around my-0 mx-auto" fluid>
    <v-switch
      v-model="filters"
      color="success"
      direction="vertical"
      label="Done"
      value="Done"
    ></v-switch>
    <v-switch
      v-model="filters"
      color="orange"
      label="Pending"
      value="Pending"
    ></v-switch>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "FilterComponent",
  data: () => {
    return {};
  },
  computed: {
    ...mapState({
      filterTodos: (state) => state.filterTodos,
    }),
    filters: {
      get() {
        return this.filterTodos;
      },
      set(filter) {
        this.setFilter(filter);
      },
    },
  },
  methods: {
    ...mapActions({
      setFilter: "setFilter",
    }),
  },
};
</script>

<style scoped>
.d-flex {
  width: 50%;
}
</style>