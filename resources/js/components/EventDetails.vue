<template>
    <div id="portfolio" class="col-md-8 mx-auto mt-md-5 custom-trans" v-if="event">
        <div class="row">
<!--            <div class="col-4">-->
<!--                <img :src="`/${article.imagePath}`" class="rounded img-fluid" :alt="article.title">-->
<!--            </div>-->
            <div class="col-12 my-auto rounded-top" ref="header" :style="{
                'background': `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(/${event.imagePath})`,
                'background-position': 'center',
                'background-repeat': 'no-repeat',
                'background-size': 'cover'
            }">
                <div class="mt-3">
                    <h1 class="text-center font-weight-bold">{{event.title}}</h1>
                    <p class="text-center">{{event.date}}</p>
                </div>
            </div>
        </div>
        <div class="mt-4" v-html="event.content"/>

        <div class="mt-4 text-center border-top">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                event: null
            }
        },
        computed:{

        },
        watch: {

        },
        methods: {
            getEvent(){
                axios.get(`/api/event/${this.$route.params.slug}`).then(response => {
                    this.$set(this.$data,'event',response.data.data)
                })
            }
        },
        mounted() {
            this.$set(this.$data,'event',this.$route.params.event)
            if (!this.$route.params.event){
                this.getEvent();
            }
        }
    }
</script>

<style>
    .custom-trans{
        background: rgba(73, 80, 87, 0.2);
    }
</style>
