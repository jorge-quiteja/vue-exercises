<template>
    <div>
        <ul class="list">
            <li v-for="item in items" :key="item.id">
                <span @click="$emit('onUpdate', item)" :class="['subtitle-2 ', item.status ]">
                    {{ item.title }}
                </span>
                <div class="buttons">
                    <v-btn @click="$emit('onUpdate', item)"  v-if="item.status === 'Pending'" class="success">
                        <v-icon>mdi-checkbox-marked-circle</v-icon>
                    </v-btn>
                    <v-btn @click="$emit('onUpdate', item)" v-if="item.status === 'Done'" class="secondary">
                        <v-icon>mdi-cached</v-icon>
                    </v-btn>
                    <v-btn @click="$emit('onRemove', item.id)" color="error">
                        <v-icon>mdi-cancel</v-icon>
                    </v-btn>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ListComponent",
    emits: ['onUpdate', 'onRemove'],
    props: {
        items: Array,
    },
    computed: {},
    methods: {},
    watch: {}
}
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