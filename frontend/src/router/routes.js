
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'trending', component: () => import('pages/Trending.vue') },
      { path: 'popular', component: () => import('pages/Popular.vue') },
      { path: 'top_rated', component: () => import('pages/TopRated.vue') },
      { path: 'celebrities', component: () => import('pages/Celebrities.vue') },
      { path: 'watch_providers', component: () => import('pages/WatchProviders.vue') },
      { path: 'movie/:id', component: () => import('pages/Movie.vue'), name: 'movie' },
      { path: 'tv/:id', component: () => import('pages/Tv.vue'), name: 'tv' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
