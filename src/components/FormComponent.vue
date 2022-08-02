<template>
    <div>
        <v-form class="align-center" ref="appForm" @submit.prevent="formSubmit" v-on:keyup.enter="formSubmit"
            v-model="valid">
            <v-row>
                <v-col cols="10">
                    <v-text-field label="Add new" v-model="item" :rules="rules" hide-details="auto" hint="For example, Take Shower">
                    </v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-btn type="submit">
                        <v-icon>mdi-plus-circle</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "FormComponent",
    emits: ['addNew'],
    data: () => ({
        valid: false,
        item: "",
        rules: [
            value => !!value || 'Required.',
            value => (value && value.length >= 3) || 'Min 3 characters',
        ],
    }),
    methods: {
        formSubmit: function () {
            if (this.item.length > 2) {
                this.$emit('addNew', this.item);
                this.$refs.appForm.reset();
                this.$refs.appForm.inputs[0].blur();
                return;
            }
            return;
        }
    }
}
</script>

<style scoped>
.v-form {
    width: 90%;
    margin: 0 auto;
}

.v-btn {
    margin-top: 20%;
}
</style>
