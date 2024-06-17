const MainRoutes = {
    path: '/main',
    meta: {
        requiresAuth: true
    },
    redirect: '/main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'Starter',
            path: '/',
            component: () => import('@/views/StarterPage.vue')
        },
        {
            name: 'businesses',
            path: '/businesses',
            component: () => import('@/views/videoportal/VideoPortal.vue')
        },
    ]
};

export default MainRoutes;
