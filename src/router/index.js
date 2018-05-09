/* eslint-disable */
import Vue from "vue"
import Router from "vue-router"

import Home from "@/routers/Home/Home"
import Market from "@/routers/Market/Market"
import Collection from "@/routers/Collection/Collection"
import Mine from "@/routers/Mine/Mine"

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		component: Home
  	},
  	{
  		path: '/market',
  		component: Market
  	},
  	{
  		path: '/collection',
  		component: Collection
  	},
  	{
  		path: '/mine',
  		component: Mine
  	}
  ]
})
