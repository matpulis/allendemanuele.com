import Landing from './pages/Landing.vue'
import Portfolio from './pages/Portfolio.vue'
import Experience from './pages/Experience.vue'
import About from './pages/About.vue'
import Reach from './pages/Reach.vue'

import NotFound404 from './pages/errors/NotFound404.vue'


export const routes = [
    { path: '', component: Landing },
    { path: '/portfolio', component: Portfolio },
    { path: '/experience', component: Experience },
    { path: '/about', component: About },
    { path: '/reach', component: Reach },
    { path: '*', component: NotFound404 },
];