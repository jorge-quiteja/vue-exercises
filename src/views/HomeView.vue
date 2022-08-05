<template>
  <v-app class='home'>
    <TitleComponent />
    <FormComponent @addNew='addTodo' />
    <FilterComponent />
    <ListComponent
      :items='filter !== null ? filteredTodos : todos'
      @onUpdate='updateStatus'
      @onRemove='removeTodo'
    />
  </v-app>
</template>

<script>
import TitleComponent from '../components/TitleComponent';
import FormComponent from '../components/FormComponent.vue';
import FilterComponent from '../components/FilterComponent.vue';
import ListComponent from '../components/ListComponent.vue';
import api from '@/services/api.js';

export default {
  name: 'HomeView',
  components: {
    TitleComponent,
    FormComponent,
    FilterComponent,
    ListComponent,
  },
  async mounted() {
    api.post('', {
        body: {
          'query': '{ allTodos { id, title, progress } }'
        },
      })
      .then(res => res.json())
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      });

  },
  async beforeCreate() {
    // var cached = await JSON.parse(localStorage.getItem('todos'));
    // if (cached) {
    //   this.todos = cached;
    // }
  },
  data: () => ({
    todos: [],
    filteredTodos: [],
  }),
  methods: {
    addTodo: function (todo) {
      var date = new Date();

      var newTodo = {
        id: date.getTime(),
        title: todo,
        progress: 'Pending',
      };
      if (todo.name != '') {
        this.todos.push(newTodo);
        this.updateCached();
      }
      return;
    },
    removeTodo: function (id) {
      this.todos = this.todos.filter((item) => {
        if (item.id != id) {
          return item;
        }
        return;
      });
      this.updateCached();
    },
    updateStatus(todo) {
      this.todos.map((item) => {
        if (item.id === todo.id) {
          item.progress = item.progress === 'Pending' ? 'Done' : 'Pending';
        }
        return;
      });
      this.updateCached();
    },
    updateCached: async function () {
      await localStorage.removeItem('todos');
      await localStorage.setItem('todos', JSON.stringify(this.todos));
    },
  },
  computed: {
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(filter) {
        this.$store.dispatch('setFilters', filter);
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