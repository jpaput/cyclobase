import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/UserList'
import Login from '@/components/Login'
import AddUserForm from '@/components/AddUserForm'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/users/add',
      name: 'AddUserForm',
      component: AddUserForm
    }
  ]
})
