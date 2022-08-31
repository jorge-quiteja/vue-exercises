<template>
  <div>
    <ul class="list text-start">
      <li
        class="d-flex justify-space-between mt-5 mx-3"
        v-for="item in items"
        :key="item.id"
      >
        <span
          @click="updateTodoStatus(item)"
          :class="['align-self-center ', item.progress]"
        >
          {{ item.title }}
        </span>
        <div class="buttons">
          <v-btn
            @click="updateTodoStatus(item)"
            v-if="item.progress === 'Pending'"
            class="success"
          >
            <v-icon>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
          <v-btn
            @click="updateTodoStatus(item)"
            v-if="item.progress === 'Done'"
            class="secondary"
          >
            <v-icon>mdi-arrow-u-left-bottom</v-icon>
          </v-btn>
          <v-btn @click="removeTodo(item.id)" color="error">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ListComponent",
  computed: {
    ...mapGetters({
      items: "todoList",
    }),
  },
  methods: {
    ...mapActions({
      updateTodoStatus: "updateTodoStatus",
      removeTodo: "removeTodo",
      fetchTodos: "fetchTodos",
    }),
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.list li span {
  cursor: pointer;
}

.Done {
  color: #9e9e9e;
  text-decoration: line-through;
}

.buttons button {
  margin: 0px 8px;
}
</style>