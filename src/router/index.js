import { createRouter, createWebHistory } from 'vue-router'
import Default from "@/views/Default";
import Count from "@/views/Count";
import Home from "@/views/Home";
import Profile from "@/views/Profile";
const routes = [
  {
   name: "Default",
   path: "/",
   component: Default,
   children :[
    {
      name: "Home",
      path: "/",
      component: Home,
      props:true
    },
    {
      name: "Profile",
      path: "/profile",
      component: Profile,
      props:true
    },
   ]
  },
  {
    name: "Count",
    path: "/count",
    component: Count,
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
