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

function HomePage() {
    const [ListProducts, setListProducts] = useState([]);

    useEffect(() => {
       getProducts().then((Response) => {
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
            </div>
            <div  style={{height:'100px' }}>

            </div>
        </div>
    );
}

export default HomePage;
