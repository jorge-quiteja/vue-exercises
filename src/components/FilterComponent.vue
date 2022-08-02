<template>
  <v-container class="switch-container" fluid>
    <v-switch
      @change="onFilter"
      :disabled="filterActive === 'Pending'"
      v-model="filters"
      color="success"
      direction="vertical"
      label="Done"
      value="Done"
    ></v-switch>
    <v-switch
      @change="onFilter"
      :disabled="filterActive === 'Done'"
      v-model="filters"
      color="orange"
      label="Pending"
      value="Pending"
    ></v-switch>
  </v-container>
</template>

<script>
export default {
  name: "FilterComponent",
  data: () => {
    return {
      filterActive: "none",
    };
  },
  methods: {
    onFilter(e) {
      this.filterActive = e;
      return;
    },
  },
  computed: {
    filters: {
      get() {
        return this.$store.state.filters;
      },
      set(filter) {
        this.$store.dispatch("setFilters", filter);
      },
    },
  },
};
</script>

<style scoped>
.switch-container {
  display: flex;
  width: 50%;
  justify-content: space-around;
  margin-left: 0 auto;
}

.switch-container .v-input {
  margin-left: 1em;
}
</style>