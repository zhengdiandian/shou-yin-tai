/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import userInfo from './views/userInfo'
import OrderList from './views/orderList.vue'
import orderListFiltrate from './views/orderListFiltrate.vue'
import orderDetail from './views/orderDetail.vue'
import statistics from './views/statistics.vue'
import statisticsFiltrate from './views/statisticsFiltrate.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: function () {
        return import('./views/userInfo')
      }
    },
    {
      path: '/ruWangXingShi',
      name: 'ruWangXingshi',
      component: function () {
        return import('./views/RuWang')
      }
    },
    {
      path: '/shoppingunit',
      name: 'shoppingunit',
      component: function () {
        import('./views/Shoppingunit')
      }
    },
    {
      path: '/shoppingunitOne',
      name: 'shoppingunitOne',
      component: function () {
        return import('./views/ShoppingunitOne')
      }
    },
    {
      path: '/shoppingunitTwo',
      name: 'shoppingunitTwo',
      component: function () {
        return import('./views/ShoppingunitTwo')
      }
    },
    {
		  path: '/views/orderList',
		  name: 'orderList',
      component: OrderList
    },
    {
		  path: '/views/orderList/orderDetail',
		  name: 'orderDetail',
      component: orderDetail
    },
    {
		  path: '/views/orderList/orderListFiltrate',
		  name: 'orderListFiltrate',
      component: orderListFiltrate
    },
    {
		  path: '/views/statistics',
		  name: 'statistics',
      component: statistics
    },
    {
		  path: '/views/statistics/filtrate',
		  name: 'filtrate',
      component: statisticsFiltrate
    }
  ]
})
