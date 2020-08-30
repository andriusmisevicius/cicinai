import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "./components/About";

Vue.use(VueRouter);

const routes = [
    {
        path: '/apie',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
    },{
        path: '/kontaktai',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ './components/Contact.vue')
    },{
        path: '/naujienos',
        name: 'News',
        component: () => import(/* webpackChunkName: "portfolio" */ './components/News.vue')
    },
    ,{
        path: '/renginiai',
        name: 'Events',
        component: () => import(/* webpackChunkName: "portfolio" */ './components/Events.vue')
    },{
        path: '/renginiai/:slug',
        name: 'Event Details',
        component: () => import(/* webpackChunkName: "portfolio" */ './components/EventDetails.vue')
    },
    {
        path: '/naujienos/:slug',
        name: 'News Details',
        component: () => import(/* webpackChunkName: "portfolio" */ './components/NewsDetails.vue')
    },{
        path: '/verslai',
        name: 'Businesses',
        component: () => import(/* webpackChunkName: "services" */ './components/Businesses.vue')
    },{
        path: '*',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ './components/Home.vue')
    },

];


const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router
