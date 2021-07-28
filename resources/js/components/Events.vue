<template>
    <div id="portfolio" class="portfolio pt-5 ">
        <div class="container">
                <div class="col-12" v-if="events">
                    <date-picker
                        v-model="date"
                        locale="lt"
                        :attributes="computedAttributes"
                        :input-props='{
                            placeholder: "Pasirinkite datą. Taškai parodo, kuriomis dienomis vyksta renginiai.",
                          }'
                    ></date-picker>
                </div>
                <div class="col-12 card-columns pt-2">
                    <div class="card border-dark" v-for="entry in computedEvents">
                        <div class="" v-if="entry.imagePath">
                            <img :src="'/'+entry.imagePath" class="card-img-top">
                        </div>
                        <div class="card-header bg-dark">
                            <h4>
                                <router-link :to="{name: 'Event Details', params: {
                                event: entry,
                                slug: entry.slug
                            }}" title="Daugiau detalių">{{entry.title}}</router-link>
                            </h4>
                            <p>{{entry.date}}</p>
                            <router-link class="btn btn-outline-primary" :to="{name: 'Event Details', params: {
                                event: entry,
                                slug: entry.slug
                            }}" title="Daugiau detalių">Plačiau</router-link>
                        </div>
                    </div>
                </div>
        </div>
        <div class="container" v-if="computedEvents">
            <div class="col d-flex justify-content-center">
                <a class="m-2 btn btn-success" @click="goToPage(links.prev)" v-if="meta.current_page !== 1">{{meta.current_page-1}}</a>
                <a class="m-2 btn btn-success active"><u>{{meta.current_page}}</u></a>
                <a class="m-2 btn btn-success" @click="goToPage(links.next)" v-if="meta.current_page !== meta.last_page">{{meta.current_page+1}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import Calendar from 'v-calendar/lib/components/calendar.umd'
    import DatePicker from 'v-calendar/lib/components/date-picker.umd'

    export default {
        components: {
            Calendar,
            DatePicker
        },
        data() {
            return {
                date: null,
                events: null,
                links: {},
                meta: {}
            }
        },
        watch: {
            date(newDate, oldDate){
                if (newDate){
                    this.getEvents(newDate.toDateString());
                }
                if (oldDate && !newDate){
                    this.getEvents()
                }
            }
        },
        computed:{
            computedEvents(){
                return this.events;
            },
            computedAttributes(){
                return [
                    {
                        key: 'today',
                        dot: true,
                        dates: _.map(this.computedEvents, function(event) {
                            return new Date(event.date);
                        })
                    }
                ]
            }
        },
        methods: {
            createNewDate(event){
                return new Date(event.date);
            },
            goToPage(page){
                axios.get(page).then(response => {
                    this.events = response.data.data;
                    this.links = response.data.links;
                    this.meta = response.data.meta
                })
            },
            getEvents(date = null){
                let url = date ? `/api/events?date=${date}` : '/api/events';
                axios.get(url).then(response => {
                    this.events = response.data.data;
                    this.links = response.data.links;
                    this.meta = response.data.meta
                });
            }
        },
        mounted() {
            this.getEvents();
        }
    }
</script>
