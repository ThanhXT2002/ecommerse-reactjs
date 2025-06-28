import HeaderSidebar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSidebar';
import styles from './styles.module.scss';
import { PiShoppingCart } from 'react-icons/pi';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function Cart() {
    const { container,boxBtn,boxTotalFee } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSidebar
                icon={<PiShoppingCart style={{ fontSize: '30px' }}/>}
                
                title='CART'
            />
            <ItemProduct/>
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
