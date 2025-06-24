import { lazy } from 'react';

// Lazy load components
const HomePage = lazy(() => import('@components/HomePage/HomePage'));
const BlogPage = lazy(() => import('@components/BlogPage/BlogPage'));

const routers = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/blog',
        component: BlogPage
    }
];

export default routers;