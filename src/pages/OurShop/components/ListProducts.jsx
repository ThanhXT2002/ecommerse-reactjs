import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';

function ListProducts() {
    const { products } = useContext(OurShopContext);
    const { containerListProducts } = styles;
    
    return (
        <>
            <MainLayout>
                <div className={containerListProducts}>
                    {products && products.map((item, index) => (
                        <ProductItem
                            key={item.id || item._id || index}
                            src={item.images && item.images[0]}
                            prevSrc={item.images && item.images[1]}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
            </MainLayout>
        </>
    );
}

export default ListProducts;