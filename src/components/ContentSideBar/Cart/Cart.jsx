import HeaderSidebar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSidebar';
import styles from './styles.module.scss';
import { PiShoppingCart } from 'react-icons/pi';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SidebarContext } from '@contexts/SidebarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import cls from 'classnames';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const {
        container,
        boxBtn,
        boxTotalFee,
        containerListProductCart,
        overlayLoading,
        isEmpty,
        boxEmpty,
        boxBtnEmpty,
        containerListItem
    } = styles;
    const navigate = useNavigate();

    const { listProductCart, isLoading, setIsOpen } =
        useContext(SidebarContext);

    const subTotal = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    const handleNavigateToShop = () => {
        navigate('/shop');
        setIsOpen(false);
    };

    const handleNavigateToCart = () => {
        navigate('/cart');
        setIsOpen(false);
    };

    return (
        <div
            className={cls(container, {
                [isEmpty]: !listProductCart.length
            })}
        >
            <HeaderSidebar
                icon={<PiShoppingCart style={{ fontSize: '30px' }} />}
                title="CART"
            />
            {listProductCart.length ? (
                <div className={containerListItem}>
                    <div>
                        {isLoading ? (
                            <LoadingTextCommon />
                        ) : (
                            listProductCart.map((item, index) => {
                                return (
                                    <ItemProduct
                                        key={index}
                                        src={item.images[0]}
                                        nameProduct={item.name}
                                        priceProduct={item.price}
                                        skuProduct={item.sku}
                                        sizeProduct={item.size}
                                        quantity={item.quantity}
                                        productId={item.productId}
                                        userId={item.userId}
                                    />
                                );
                            })
                        )}
                    </div>
                    <div>
                        <div className={boxTotalFee}>
                            <p>SUBTOTAL:</p>
                            <p>${subTotal}</p>
                        </div>
                        <div className={boxBtn}>
                            <Button content={'VIEW CART'}onClick={handleNavigateToCart} />
                            <Button content={'CHECKOUT'} isPrimary={false} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={boxEmpty}>
                    <div>No products inthe cart</div>
                    <div className={boxBtnEmpty} onClick={handleNavigateToShop}>
                        <Button content={'RETURN TO SHOP'} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
