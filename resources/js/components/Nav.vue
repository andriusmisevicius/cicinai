<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" v-if="this.$route.name !== 'Home'">
        <a class="navbar-brand" href="/">Čičinų Kaimas</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'Home'}">Pradžia</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'About'}">Apie</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'News'}">Naujienos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'Events'}">Renginiai</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'Businesses'}">Verslai</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'Contact'}">Kontaktai</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
    }
</script>

<style>
    .custom-font{
        font-size: 16px !important;
        font-family: sans-serif;
    }
</style>
