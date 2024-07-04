import MainLayout from 'layouts/MainLayout.vue'

export default ({ router }) => {
  router.addRoute({
    path: '/cliente',
    component: MainLayout,
    children: [
      { path: 'view', component: () => import('boot/cliente/ClienteView.vue') },
      { path: 'edit', component: () => import('boot/cliente/ClienteEdit.vue') }
    ]
  })

  router.addRoute({
    path: '/user',
    component: MainLayout,
    children: [
      { path: 'view', component: () => import('boot/user/UserView.vue') },
      { path: 'edit', component: () => import('boot/user/UserEdit.vue') }
    ]
  })

  /*
  router.beforeEach((to, from, next) => {
    return next()
  })
    */
}
