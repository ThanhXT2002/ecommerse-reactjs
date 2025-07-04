import Banner from '@components/Banner/Banner';
import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingLisProdict/HeadlingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomepage';

function HomePage() {
    const [ListProducts, setListProducts] = useState([]);

    useEffect(() => {

        const query = {
            page: 1,
            limit: 10,
            sortType: 0,
        };
       getProducts(query).then((Response) => {
        setListProducts(Response.contents);
       });
    }, []);

    const { container } = styles;

    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProduct data={ListProducts.slice(0,2)}/>
                <PopularProduct data={ListProducts.slice(2,ListProducts.length)}/>
                <SaleHomePage/>
                <MyFooter/>
            </div>
        </div>
    );
}

export default HomePage;
