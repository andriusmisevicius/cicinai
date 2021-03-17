<template>
        <div class="col-12 mt-5">
            <div class="container">
                <h1 class="display-3 text-center">Čičinų kraštas</h1>
                <!-- Uncomment below if you prefer to use an image logo -->
                <!-- <a href="index.html" class="mr-auto"><img src="/img/logo.png" alt="" class="img-fluid"></a> -->
                <h1 class="display-5 text-center">bendruomenės puslapis</h1>

                <nav class="nav nav-pills flex-column flex-sm-row mx-auto mt-3 custom-trans">
                    <router-link class="flex-sm-fill text-sm-center nav-link font-weight-bold text-white" :to="{name: 'About'}">Apie</router-link>
                    <router-link class="flex-sm-fill text-sm-center nav-link font-weight-bold text-white" :to="{name: 'News'}">Naujienos</router-link>
                    <router-link class="flex-sm-fill text-sm-center nav-link font-weight-bold text-white" :to="{name: 'Events'}">Renginiai</router-link>
                    <router-link class="flex-sm-fill text-sm-center nav-link font-weight-bold text-white" :to="{name: 'Businesses'}">Verslai</router-link>
                    <router-link class="flex-sm-fill text-sm-center nav-link font-weight-bold text-white" :to="{name: 'Contact'}">Kontaktai</router-link>
                </nav>
            </div>
            <div class="container mt-3 ">
                <h1 class="display-5 text-center">Paskutinės naujienos</h1>
                <div class="card-deck">
                    <div class="card custom-trans" v-for="entry in news">
                        <img :src="`/${entry.imagePath}`" style="max-height: 200px;object-fit: cover;" class="card-img-top img-fluid">
                        <div class="card-body text-center">
                            <h3 class="card-title">{{entry.title}}</h3>
                            <p class="card-text">{{entry.createdAt}}</p>
                            <router-link :to="{name: 'News Details', params: {
                                    article: entry,
                                    slug: entry.slug
                                }}" title="Daugiau detalių" class="btn btn-success"><i class="bx bx-plus"></i>Daugiau detalių</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5 mb-5">
                <h1 class="display-5 text-center">Naujausi renginiai</h1>
                <div class="card-deck">
                    <div class="card custom-trans" v-for="entry in events">
                        <img :src="`/${entry.imagePath}`" style="max-height: 200px;object-fit: cover;" class="card-img-top img-fluid">
                        <div class="card-body text-center">
                            <h3 class="card-title">{{entry.title}}</h3>
                            <p class="card-text">Renginio data: {{entry.date}}</p>
                            <router-link :to="{name: 'Event Details', params: {
                                event: entry,
                                slug: entry.slug
                            }}" title="Daugiau detalių" class="btn btn-success"><i class="bx bx-plus"></i>Daugiau detalių</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5 mb-5">
                <h1 class="display-5 text-center">Remėjų renginiai</h1>
                <div class="card-deck">
                    <div class="card custom-trans">
                        <img src="/images/skaitmeninio-rastingumo-mokymai.png" class="card-img-top img-fluid">
                        <div class="card-body text-center">
                            <h3 class="card-title">Skaitmeninio raštingumo mokymai</h3>
                            <a href="https://www.prisijungusi.lt/mokymai" target="_blank" title="Daugiau detalių" class="btn btn-success"><i class="bx bx-plus"></i>Daugiau detalių</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                news: null,
                events: null
            }
        },
        methods:{
            getDataFromDb(){
                axios.get('/api/landing').then(response => {
                    this.events = response.data.events;
                    this.news = response.data.news;
                })
            }
        },
        mounted() {
            this.getDataFromDb();
        }
    }
</script>

<style>
    .custom-font{
        font-size: 16px !important;
        font-family: sans-serif;
    }
    .custom-trans{
        background: rgba(73, 80, 87, 0.5);
    }
</style>
