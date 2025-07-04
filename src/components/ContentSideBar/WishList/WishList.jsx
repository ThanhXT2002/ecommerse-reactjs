import HeaderSidebar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSidebar';
import styles from './styles.module.scss';
import { IoIosHeartEmpty } from 'react-icons/io';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function WishList() {
    const { container,boxBtn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSidebar
                icon={<IoIosHeartEmpty style={{ fontSize: '30px' }}/>}
                
                title='WISHLIST'
            />
            <ItemProduct/>
            </div>
            <div className={boxBtn}>
                <Button content={'VIEW WISHLIST'} />
                <Button content={'ADD ALL TO CART'} isPrimary={false} />

            </div>
        </div>
    );
}

export default WishList;
