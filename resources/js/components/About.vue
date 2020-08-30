<template>
    <div id="about" class="about pt-3 pb-3">

        <!-- ======= About Me ======= -->
        <div class="about-me container" v-for="post in content">
            <div class="row pt-md-5">
                <div class="col-12 content custom-trans p-3 rounded" data-aos="fade-left">
                    <div v-html="post.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                aboutPosts: null
            }
        },
        computed:{
            content(){
                return this.aboutPosts;
            }
        },
        methods: {
            getContent(){
                axios.get('/api/apie-mus').then(response => {
                    this.aboutPosts = response.data.data;
                });
            }
        },
        mounted() {
            this.getContent();
        }
    }
</script>

<style>
    .custom-trans{
        background: rgba(73, 80, 87, 0.2);
    }
</style>
