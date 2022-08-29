import Vue from "vue";
import VueRouter from "vue-router";
import LoginComponent from "@/components/LoginComponent.vue";
import AdminDashboardComponent from "@/components/AdminDashboardComponent";
import CreateSellerComponent from "@/components/CreateSellerComponent";
import SellerInventoryComponent from '@/components/SellerInventoryComponent'
import ViewSellerComponent from "@/components/ViewSellerComponent";
import ProductContainerComponent from '@/components/ProductContainerComponent'

Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'LoginComponent', component: LoginComponent},
  { path: "/login", name: "LoginComponent", component: LoginComponent },
  {
    path: "/admindashboard",
    name: "AdminDashboardComponent",
    component: AdminDashboardComponent,
    beforeEnter: (to, from, next)=>{
      const role = localStorage.getItem('role');
      if(role === undefined || role === null || (role.toLocaleLowerCase() !== 'admin' && role.toLocaleLowerCase() !== 'seller')){
        next ({name: 'LoginComponent', path: '/login'});
      }else if(role.toLocaleLowerCase() === 'seller'){
        next ({name: 'SellerInventoryComponent', path: '/sellerdashboard'});
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
    path: "/sellerdashboard",
    name: "SellerInventoryComponent",
    component: SellerInventoryComponent,
    beforeEnter: (to, from, next)=>{
      const role = localStorage.getItem('role');
      if(role === undefined || role === null || (role.toLocaleLowerCase() !== 'admin' && role.toLocaleLowerCase() !== 'seller')){
        next ({name: 'LoginComponent', path: '/login'});
      }else if(role.toLocaleLowerCase() === 'admin'){
        next ({name: 'AdminDashboardComponent', path: '/admindashboard'});
      }else{
        next();
      }
    }
  },
  {
    path: '/admindashboard/sellers/:userId',
    name: 'ViewSellerComponent',
    component: ViewSellerComponent,
    beforeEnter: (to, from, next)=>{
      const role = localStorage.getItem('role');
      if(role === undefined || role === null || (role.toLocaleLowerCase() !== 'admin' && role.toLocaleLowerCase() !== 'seller')){
        next ({name: 'LoginComponent', path: '/login'});
      }else if(role.toLocaleLowerCase() === 'seller'){
        next ({name: 'LoginComponent', path: '/login'});
      }else{
        next();
      }
    }
  },
  {
    path: '/sellerdashboard/products',
    name: 'ProductContainerComponent',
    component : ProductContainerComponent,
    beforeEnter: (to, from, next)=>{
      const role = localStorage.getItem('role');
      if(role === undefined || role === null || (role.toLocaleLowerCase() !== 'admin' && role.toLocaleLowerCase() !== 'seller')){
        next ({name: 'LoginComponent', path: '/login'});
      }else if(role.toLocaleLowerCase() === 'admin'){
        next ({name: 'LoginComponent', path: '/login'});
      }else{
        next(); //is role is seller
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;
