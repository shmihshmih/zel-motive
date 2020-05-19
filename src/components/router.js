import Vue from 'vue'
import Router from 'vue-router'
import bibliographyMain from '@/views/bibliographyMain.vue'
import folkloreMain from '@/views/folkloreMain.vue'
import aboutMain from '@/views/aboutMain.vue'
import artMain from '@/views/artMain.vue'
import literatureMain from '@/views/literatureMain.vue'
import movieMain from '@/views/movieMain.vue'
import musicMain from '@/views/musicMain.vue'
import theathreMain from '@/views/theathreMain.vue'
import indexMain from '@/views/indexMain.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: indexMain
        },
        {
            path: '/folklore',
            component: folkloreMain
        },
        {
            path: '/bibliography',
            component: bibliographyMain
        },
        {
            path: '/about',
            component: aboutMain
        },
        {
            path: '/art',
            component: artMain
        },
        {
            path: '/literature',
            component: literatureMain
        },
        {
            path: '/movies',
            component: movieMain
        },
        {
            path: '/music',
            component: musicMain
        },
        {
            path: '/theathre',
            component: theathreMain
        },

    ]
})