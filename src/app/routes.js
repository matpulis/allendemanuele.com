import Landing from './pages/Landing.vue'

import NotFound404 from './pages/errors/NotFound404.vue'


export const routes = [
    { path: '', component: Landing },
    { path: '/home', component: Landing },
    { path: '/about', component: Landing },
    { path: '/skills', component: Landing },
    { path: '/work', component: Landing },
    { path: '/contact', component: Landing },
    { path: '*', component: NotFound404 },
];