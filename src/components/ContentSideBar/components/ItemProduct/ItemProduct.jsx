import styles from './styles.module.scss';
import { RiCloseLargeFill } from "react-icons/ri";

function ItemProduct({
    src,
    nameProduct,
    priceProduct,
    skuProduct,
    sizeProduct,
    quantity
}) {
    const { container, boxContent, title, price, boxClose, size } = styles;
    return (
        <div className={container}>
            <img
                src={src}
                alt="nameProduct"
            />

            <div className={boxClose} style={{
                fontSize: '15px',
                color:'c1c1c1'
            }}>
                <RiCloseLargeFill/>
            </div>
            <div className={boxContent}>
                <div className={title}>{nameProduct}</div>
                <div className={size}>{sizeProduct}</div>
                <div className={price}>{quantity} x ${priceProduct}</div>
                <div className={price}>{skuProduct}</div>
            </div>
        </div>
    );
}

export default ItemProduct;
