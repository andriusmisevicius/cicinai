<template>
    <div class="col-8 mx-auto mt-md-5 mb-md-5">
        <div class="card custom-trans" v-if="article">
            <div class="card-header bg-dark">
                <h1 class="text-center font-weight-bold">{{ article.title }}</h1>
                <p class="text-center">{{ article.createdAt }}</p>
            </div>
            <div class="" v-if="article.imagePath"
                 :style="`
                    background-image: url(${article.imagePath});
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 100%;
                    width: 100%;`"
            >
                <div
                    class="text-center"
                    :style="`
                        margin-top: -1px;
                        background: rgba(255, 255, 255, 0.2);
                        backdrop-filter: blur(8px);
                        height: 100%;
                        width: 100%;
                    `"
                >
                    <img class="img-fluid" :src="article.imagePath">
                </div>

            </div>
            <div class="card-body" v-html="article.content"/>
            <div class="card-body">
                <router-link :to="'/naujienos'" class="btn btn-success">Atgal</router-link>
            </div>
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

<style scoped>
.background {
    background-image: url("http://127.0.0.1:8000/uploads/folder_1/folder_2/dc5aa69fc979ed6a4ad7f4d86f76ca41.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 307px;
    width: 100%;
}

.blur {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
    height: 100%;
    width: 100%;
}

.custom-trans {
    background: rgba(73, 80, 87, 0.2);
}
</style>
