<template>
  <div>
    <v-form
      class="align-center my-0 mx-auto"
      ref="appForm"
      @submit.prevent="formSubmit"
      v-on:keyup.enter="formSubmit"
      v-model="valid"
    >
      <v-row>
        <v-col cols="10">
          <v-text-field
            label="Add new"
            v-model="todoName"
            :rules="rules"
            hide-details="auto"
            hint="For example, Take Shower"
          >
          </v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn class="mt-3" type="submit">
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FormComponent",
  data: () => ({
    valid: false,
    todoName: "",
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
  methods: {
    ...mapActions({
      addTodo: "addTodo",
    }),
    formSubmit: function () {
      if (this.todoName.length > 2 && this.todoName != "") {
        this.addTodo(this.todoName);
        this.$refs.appForm.reset();
        this.$refs.appForm.inputs[0].blur();
        return;
      }
      return;
    },
  },
};
</script>

<style scoped>
.v-form {
  width: 90%;
}
</style>
