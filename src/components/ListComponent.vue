<template>
  <div>
    <ul class="list">
      <li v-for="item in items" :key="item.id">
        <span
          @click="$emit('onUpdate', item)"
          :class="['subtitle-2 ', item.progress]"
        >
          {{ item.title }}
        </span>
        <div class="buttons">
          <v-btn
            @click="updateStatus(item)"
            v-if="item.progress === 'Pending'"
            class="success"
          >
            <v-icon>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
          <v-btn
            @click="updateStatus(item)"
            v-if="item.progress === 'Done'"
            class="secondary"
          >
            <v-icon>mdi-arrow-u-left-bottom</v-icon>
          </v-btn>
          <v-btn @click="removeItem(item.id)" color="error">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions} from 'vuex';

export default {
  name: "ListComponent",
  emits: ["onUpdate", "onRemove"],
  props: {
    items: Array,
  },
  computed: {
    // ...mapState({
    //   items: state => state.todos
    // })
  },
  methods: {
    ...mapActions({
      updateStatus: 'updateStatus',
      removeItem: 'removeItem',
    })
  },
  watch: {},
};
</script>

<style scoped>
.list {
  text-align: start;
}

.list li {
  margin: 5% 10px 10px;
  display: flex;
  justify-content: space-between;
}

.list li span {
  cursor: pointer;
}

.subtitle-2 {
  align-self: center;
}

.Done {
  color: grey;
  text-decoration: line-through;
}

.buttons button {
  margin: 0px 5px;
}

.donned {
  display: none;
}
</style>