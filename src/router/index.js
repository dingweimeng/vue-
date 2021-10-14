import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: () =>
            import ('../views/login.vue')
    },
    {
        path: '/home',
        name: 'Home',

        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/Home.vue')
        }
    }
]

const router = new VueRouter({
    routes
})

export default router