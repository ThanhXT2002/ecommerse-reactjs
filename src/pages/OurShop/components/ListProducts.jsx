import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function ListProducts() {
    const { products, isShowGrid, isLoading,handleLoadMore,total, isLoadMore } = useContext(OurShopContext);
    const { containerListProducts, sectionListProduct,loadingIcon } = styles;

    return (
        <div className={sectionListProduct}>
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
                        {
                            products.length < total && (
                                <div
                            style={{
                                width: '180px',
                                textAlign: 'center',
                                margin: '50px auto 0px',
                                
                            }}
                        >
                            <Button content={isLoadMore ? (<AiOutlineLoading3Quarters className={loadingIcon}/>):'LOAD MORE PRODUCT'} onClick={handleLoadMore}/>
                        </div>
                            )
                        }
                    </>
                )}
            </MainLayout>
        </div>
    );
}

export default ListProducts;
