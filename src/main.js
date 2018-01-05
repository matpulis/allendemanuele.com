import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import MainApp from './app/MainApp.vue'
import {store} from './app/store/store'
import {routes} from './app/routes'

window.$ = window.jQuery = require('jquery') 
window.SimpleBar = require('simplebar')


//Init Vue Resource
Vue.use(VueResource);

//Init Vue Router
Vue.use(VueRouter);
const router = new VueRouter({
   routes: routes,
   mode: 'history'
});

Vue.http.options.xhr = {withCredentials: true};

//Guard after each request check token state
router.afterEach((to, from) => { 
    store.state.menu_open = false;
})

//Directives
    import './app/directives/v-simplebar.js'

//Components 
    import MainFooter from './app/components/Mainfooter.vue'
    Vue.component('main-footer', MainFooter);
    
//Init App
new Vue({
    el: '#app',
    store : store,
    router: router,
    render: h => h(MainApp)
})



//Assets
import logoLoading from "./assets/images/logo-loading.png";
import logoMenu from "./assets/images/logo-menu.png";
import logoHeader from "./assets/images/logo-header.png";
import AllenFull from "./assets/images/allen-full.png";
import GfiLogo from "./assets/images/gfi-logo.png";
import McastLogo from "./assets/images/mcast-logo.png";