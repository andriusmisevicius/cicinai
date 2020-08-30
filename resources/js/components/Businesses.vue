<template>
    <div id="services" class="services">
        <div class="container">

            <div class="section-title">
                <h2>Services</h2>
                <p>My Services</p>
            </div>

            <div class="card-columns">
                <div class="card custom-trans" v-for="business in businesses">
                    <img class="card-img-top" :src="`/${business.imagePath}`">
                    <div class="card-body text-center">
                        <h4 class="card-title">{{business.title}}</h4>
                        <p class="card-text" v-html="business.content"/>
                        <a :href="business.url" class="btn btn-primary">Aplankyti svetainę</a>
                    </div>
                </div>
            </div>

        </div>
    </div><!-- End Services Section -->
</template>

<script>
    export default {
        data() {
            return {
                businesses: {}
            }
        },
        methods: {
            getBusiness(){
                axios.get('/api/businesses').then(response => {
                    this.businesses = response.data.data
                })
            }
        },
        mounted() {
            this.getBusiness()
        }
    }
</script>
