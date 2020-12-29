import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp'
import Recruiter from '../views/Recruiter'
import Admin from '../views/Admin'
import Employer from '../views/Employer'
import ApplicantDetail from '../views/ApplicantDetail'
import {Auth} from "aws-amplify";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: "SignupPage",
    component: SignUp
  },
  {
    path: '/applicant',
    name: "ApplicantDetailPage",
    component: ApplicantDetail,
    meta: {requiresAuth: true}
  },
  {
    path: '/admin',
    name: "AdminPage",
    component: Admin,
    meta: {requiresAuth: true}
  },
  {
    path: '/recruiter',
    name: "RecruiterPage",
    component: Recruiter,
    meta: {requiresAuth: true}
  },
  {
    path: '/employer',
    name: "EmployerPage",
    component: Employer,
    meta: {requiresAuth: true}
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to,from,next)=>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = await Auth.currentUserInfo();

  if(!isAuthenticated && requiresAuth){
    next("/")
  }
  else{
    next()
  }


})

export default router
