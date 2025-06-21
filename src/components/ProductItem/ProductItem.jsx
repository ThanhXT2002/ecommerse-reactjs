import styles from './styles.module.scss';
import bagIcon from '@icons/svgs/bagIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';

function ProductItem({ src, prevSrc, name, price }) {
    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceCl
    } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img
                    src={src}
                    alt="img 1"
                />
                <img
                    src={prevSrc}
                    alt="img 2"
                    className={showImgWhenHover}
                />
                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <img src={bagIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={eyeIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceCl}>${price}</div>
        </div>
    );
}

export default ProductItem;
