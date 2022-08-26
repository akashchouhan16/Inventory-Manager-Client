import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from '@/components/LoginComponent.vue'
import AdminDashboardComponent from '@/components/AdminDashboardComponent'

Vue.use(VueRouter);

const routes = [
    {path: '/login', name: 'LoginComponent', component: LoginComponent},
    {path: '/admindashboard', name: 'AdminDashboardComponent', component: AdminDashboardComponent}
]


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})



export default router;