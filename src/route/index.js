import Vue from "vue";
import VueRouter from "vue-router";
import LoginComponent from "@/components/LoginComponent.vue";
import AdminDashboardComponent from "@/components/AdminDashboardComponent";
import CreateSellerComponent from "@/components/CreateSellerComponent";
import SellerInventoryComponent from "@/components/SellerInventoryComponent";

Vue.use(VueRouter);

const routes = [
  { path: "/login", name: "LoginComponent", component: LoginComponent },
  {
    path: "/admindashboard",
    name: "AdminDashboardComponent",
    component: AdminDashboardComponent,
    beforeEnter: (to, from, next)=>{
      const role = localStorage.getItem('role');
      if(role === undefined || role === null){
        next ({name: 'LoginComponent', path: '/login'});
      }else{
        next();
      }
    }
  },
  {
    path: "/admindashboard/create",
    name: "CreateSellerComponent",
    component: CreateSellerComponent,
  },
  {
    path: "/admindashboard/:sellerId",
    name: "SellerInventoryComponent",
    component: SellerInventoryComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('role');
//   if(token === 'admin' || token === 'seller')
//     next(to);

//   return next('/login');
// })

export default router;
