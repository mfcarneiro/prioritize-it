
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout'),
    children: [
      { path: '', name: 'signIn', component: () => import('pages/login/UserSignIn.vue') },
      { path: 'create-account', name: 'signUp', component: () => import('pages/login/UserSignUp.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
