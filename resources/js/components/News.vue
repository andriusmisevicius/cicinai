<template>
    <div id="portfolio" class="portfolio pt-5">

        <div class="container">
            <div class="row">
                <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li class="pb-1" @click="currentCategory = null" :class="{'filter-active': !currentCategory}">Visos</li>
                        <li class="pb-1" :class="{'filter-active': currentCategory === category}" v-for="category in computedCategories" @click="currentCategory = category">{{category}}</li>
                    </ul>
                </div>
            </div>
            <div class="col-12 card-columns">
                <div class="card portfolio-wrap" v-for="news in computedNews">
                    <img :src="`/${news.imagePath}`" class="card-img-top">
                    <div class="portfolio-info">
                        <h4>{{news.title}}</h4>
                        <p>{{news.createdAt}}</p>
                        <div class="portfolio-links">
                            <router-link :to="{name: 'News Details', params: {
                                    article: news,
                                    category: currentCategory || 'Visos',
                                    slug: news.slug
                                }}" title="Daugiau detalių"><i class="bx bx-plus"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" v-if="computedNews">
            <div class="col d-flex justify-content-center">
                <a class="m-2 btn btn-success" @click="goToPage(links.prev)" v-if="meta.current_page !== 1">{{meta.current_page-1}}</a>
                <a class="m-2 btn btn-success active"><u>{{meta.current_page}}</u></a>
                <a class="m-2 btn btn-success" @click="goToPage(links.next)" v-if="meta.current_page !== meta.last_page">{{meta.current_page+1}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                categories: null,
                currentCategory: null,
                news: null,
                links: {},
                meta: {}
            }
        },
        computed:{
            computedCategories(){
                return this.categories;
            },
            computedNews(){
                return this.news;
            },
        },
        watch: {
            currentCategory(val){
                if (val){
                    this.$router.push(`/naujienos?category=${val}`)
                } else {
                    this.$router.push(`/naujienos`)
                }

                this.getNews(val);
            }
        },
        methods: {
            goToPage(page){
                axios.get(page).then(response => {
                    this.news = response.data.data;
                    this.links = response.data.links;
                    this.meta = response.data.meta
                })
            },
            getCategories(){
                axios.get('/api/categories').then(response => {
                    this.categories = response.data;
                });
            },
            getNews(category = null){
                let url = category ? '/api/news?category='+category : '/api/news';
                axios.get(url).then(response => {
                    this.news = response.data.data;
                    this.links = response.data.links;
                    this.meta = response.data.meta
                });
            }
        },
        mounted() {
            this.getCategories();
            if (this.$route.query.category){
                this.currentCategory = this.$route.query.category;
            }
            this.getNews();
        }
    }
</script>
