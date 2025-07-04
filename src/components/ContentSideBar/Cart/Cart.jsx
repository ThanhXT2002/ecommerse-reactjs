import HeaderSidebar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSidebar';
import styles from './styles.module.scss';
import { PiShoppingCart } from 'react-icons/pi';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SidebarContext } from '@contexts/SidebarProvider';

function Cart() {
    const { container,boxBtn,boxTotalFee } = styles;

    const {listProductCart} = useContext(SidebarContext);

    return (
        <div className={container}>
            <div>
                <HeaderSidebar
                icon={<PiShoppingCart style={{ fontSize: '30px' }}/>}
                
                title='CART'
            />
            {
                listProductCart.map((item, index) => (
                    <ItemProduct 
                    key={index}
                    src={item.images[0]}
                    nameProduct={item.name}
                    priceProduct={item.price}
                    skuProduct={item.sku}
                    sizeProduct={item.size}
                    quantity={item.quantity}
                     />
                ))

            }
            {/* <ItemProduct/> */}
            </div>
            <div>
                <div className={boxTotalFee}>
                    <p>SUBTOTAL:</p>
                    <p>$733.37</p>
                </div>
                <div className={boxBtn}>
                    <Button content={'VIEW CART'} />
                    <Button content={'CHECKOUT'} isPrimary={false} />
                </div>
            </div>
        </div>
    );
}

export default Cart;
