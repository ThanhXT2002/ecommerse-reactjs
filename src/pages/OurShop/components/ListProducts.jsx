import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';

function ListProducts() {
    const { products, isShowGrid, isLoading } = useContext(OurShopContext);
    const { containerListProducts } = styles;

    return (
        <>
            <MainLayout>
                {isLoading ? (
                    <>Loading...</>
                ) : (
                    <>
                        <div
                            className={isShowGrid ? containerListProducts : ''}
                        >
                            {products &&
                                products.map((item, index) => (
                                    <ProductItem
                                        key={item.id || item._id || index}
                                        src={item.images && item.images[0]}
                                        prevSrc={item.images && item.images[1]}
                                        name={item.name}
                                        price={item.price}
                                        details={item}
                                        isHomePage={false}
                                    />
                                ))}
                        </div>
                        <div
                            style={{
                                width: '180px',
                                textAlign: 'center',
                                margin: '50px auto 0px',
                                
                            }}
                        >
                            <Button content={'LOAD MORE PRODUCT'} />
                        </div>
                    </>
                )}
            </MainLayout>
        </>
    );
}

export default ListProducts;
