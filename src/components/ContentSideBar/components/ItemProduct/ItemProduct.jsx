import styles from './styles.module.scss';
import { RiCloseLargeFill } from "react-icons/ri";

function ItemProduct() {
    const { container, boxContent, title, price, boxClose, size } = styles;
    return (
        <div className={container}>
            <img
                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
                alt=""
            />

            <div className={boxClose} style={{
                fontSize: '15px',
                color:'c1c1c1'
            }}>
                <RiCloseLargeFill/>
            </div>
            <div className={boxContent}>
                <div className={title}>title of product</div>
                <div className={size}>Size: M</div>
                <div className={price}>$199.99</div>
                <div className={price}>SKU: 123456</div>
            </div>
        </div>
    );
}

export default ItemProduct;
