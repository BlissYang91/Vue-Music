import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home'
import Artiists from '@/pages/artists'
import ListCate from '@/pages/listcate'
import Ucenter from '@/pages/ucenter'
import Search from '@/pages/search'
import HotList from "@/pages/musiclist/hot_list"
import KingList from "@/pages/musiclist/king_list"
import NewsList from "@/pages/musiclist/news_list"
import MoreList from "@/pages/morelist"
import MusicPlay from "@/pages/musicplay"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/musicplay",
      name:"MusicPlay",
      component:MusicPlay
    },
    {
      path: '/',
      name: 'Index',
      redirect:'/home',
      component: Index,
      children:[
         {
           path:'home',
           component:Home,
           redirect:"/home/hot",
           children:[
            {
              path:"hot",
              component:HotList
            },
            {
              path:"king",
              component:KingList
            },
            {
              path:"news",
              component:NewsList
            }
          ]
         },
         {
          path:'artists',
          component:Artiists
        },
        {
          path:'home',
          component:Home
        },
        {
          path:'listcate',
          component:ListCate
        },
        {
          path:'ucenter',
          component:Ucenter
        },
        {
        path:'search',
        component:Search
       },
       {
        path:"more",
        name:"MoreList",
        component:MoreList
       }
      ]
    }
  ]
})
