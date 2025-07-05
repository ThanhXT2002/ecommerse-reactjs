import { deleteItem } from '@/apis/cartService';
import styles from './styles.module.scss';
import { RiCloseLargeFill } from 'react-icons/ri';
import { useContext, useState } from 'react';
import { SidebarContext } from '@contexts/SidebarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function ItemProduct({
    src,
    nameProduct,
    priceProduct,
    skuProduct,
    sizeProduct,
    quantity,
    productId,
    userId
}) {
    const { container, boxContent, title, price, boxClose, size, overlayLoading } = styles;
    const [isDelete, setIsDelete] = useState(false);
    const { handleGetListProductsCart } = useContext(SidebarContext);

    const handleRemoveItem = () => {
        setIsDelete(true);
        console.log('Remove item:', productId, userId);
        deleteItem({ productId, userId })
            .then((response) => {
                setIsDelete(false);
                handleGetListProductsCart(userId, 'cart');
            })
            .catch((error) => {
                console.error('Error removing item:', error);
                setIsDelete(false);
            });
    };
    return (
        <div className={container}>
            <img src={src} alt="nameProduct" />

            <div
                className={boxClose}
                onClick={handleRemoveItem}
                style={{
                    fontSize: '15px',
                    color: 'c1c1c1'
                }}
            >
                <RiCloseLargeFill />
            </div>
            <div className={boxContent}>
                <div className={title}>{nameProduct}</div>
                <div className={size}>{sizeProduct}</div>
                <div className={price}>
                    {quantity} x ${priceProduct}
                </div>
                <div className={price}>SKU: {skuProduct}</div>
            </div>
            
                {isDelete && (
                    <div className={overlayLoading}>
                     <LoadingTextCommon/>
                     </div>
                )}
               
            
        </div>
    );
}

export default ItemProduct;
