import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: function () { 
        return import ('./views/Home.vue')
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: function () { 
        return import ('./views/Contacts.vue')
      }
    },
    {
      path: '/book',
      name: 'book',
      component: function () { 
        return import ('./views/Books.vue')
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import ('./views/About.vue')
      }
      
    }
  ]
})
