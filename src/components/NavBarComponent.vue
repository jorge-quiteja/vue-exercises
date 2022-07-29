<template>
    <v-app-bar app color="light" dark>
        <div class="align-center">
            <v-img alt="Vuetify Logo" title="Vuetify Logo" contain
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" width="30" />
        </div>
        <div class="router-links">
            <router-link to="/home">Go to Home</router-link>
            <router-link to="/about">Go to About</router-link>
        </div>
    </v-app-bar>
</template>

<script>
export default {
    name: "NavBarComponent"
}
</script>

<style>
.v-app-bar div {
    justify-content: space-between;
}

.router-links {
    display: flex;
}

a {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
    color: white;
    text-decoration: none;
    margin-left: 2rem;
}

a .router-link-exact-active {
    color: #42b983;
}


a:visited {
    color: white;
}
</style>