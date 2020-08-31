<template>
    <div class="col-md-8 mx-auto mt-md-5 custom-trans" v-if="article">
        <div class="row">
<!--            <div class="col-4">-->
<!--                <img :src="`/${article.imagePath}`" class="rounded img-fluid" :alt="article.title">-->
<!--            </div>-->
            <div class="col-12 my-auto rounded-top" ref="header" :style="{
                'background': `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(/${article.imagePath})`,
                'background-position': 'center',
                'background-repeat': 'no-repeat',
                'background-size': 'cover'
            }">
                <div class="mt-3">
                    <h1 class="text-center font-weight-bold">{{article.title}}</h1>
                    <p class="text-center">{{article.createdAt}}</p>
                </div>
            </div>
        </div>
        <div class="mt-4" v-html="article.content"/>

        <div class="mt-4 text-center border-top">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                article: null
            }
        },
        computed:{

        },
        watch: {

        },
        methods: {
            getDetails(){
                axios.get(`/api/article/${this.$route.params.slug}`).then(response => {
                    this.$set(this.$data,'article',response.data.data)
                })
            }
        },
        mounted() {
            this.$set(this.$data,'article',this.$route.params.article)
            if (!this.$route.params.article){
                this.getDetails();
            }
        }
    }
</script>

<style>
    .custom-trans{
        background: rgba(73, 80, 87, 0.2)
    }
</style>
