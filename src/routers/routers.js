import { lazy } from 'react';

// Lazy load components
const HomePage = lazy(() => import('@components/HomePage/HomePage'));
const BlogPage = lazy(() => import('@components/BlogPage/BlogPage'));
const OurShopPage = lazy(() => import('@pages/OurShop/OurShop'));
const CartPage = lazy(() => import('@pages/Cart/Cart'));
const DetailProductPage = lazy(() => import('@pages/DetailProduct'));
const AboutUsPage = lazy(() => import('@pages/AboutUs'));

const routers = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/blog',
        component: BlogPage
    },
    {
        path: '/shop',
        component: OurShopPage
    },
    {
        path: '/Cart',
        component: CartPage
    },
    {
        path: '/product/:id',
        component: DetailProductPage
    },
    {
        path: '/about-us',
        component: AboutUsPage
    }
];

export default routers;