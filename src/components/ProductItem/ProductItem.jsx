import styles from './styles.module.scss';
import bagIcon from '@icons/svgs/bagIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useState } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';


function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomePage = true
}) {

    const context = useContext(OurShopContext);
    const isShowGrid = isHomePage ? true : (context?.isShowGrid ?? true);
    const [sizeChoose, setSizeChoose] = useState('');

    const {
        containeritem,
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceCl,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content,
        leftBtn,
        largImg,
        isActiveSize,
        btnClear
    } = styles;

    const handleChooseSize = (size) => {
       setSizeChoose(size);
    }

    const handleClearSize = () => {
        setSizeChoose('');
    }
    console.log('Size chosen:', sizeChoose);
    return (
        <div className={isShowGrid ? '' :containeritem}>
            <div className={cls(boxImg, {[largImg]: !isShowGrid})}>
                <img src={src} alt="img 1" />
                <img src={prevSrc} alt="img 2" className={showImgWhenHover} />
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

            <div className={isShowGrid ? '' : content}>
                {!isHomePage && (
                    <div className={boxSize}>
                        {details?.size.map((item, index) => {
                            return (
                                <div key={index} className={cls(size,{
                                    [isActiveSize]: sizeChoose === item.name
                                })} onClick={() => handleChooseSize(item.name)}>
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}

                {sizeChoose && !isHomePage && (
                    <div className={btnClear} onClick={() => handleClearSize()}>Clear</div>
                )}

                <div
                    className={cls(title, {
                        [textCenter]: !isHomePage
                    })}
                >
                    {name}
                </div>
                {!isHomePage && (
                    <div style={{ color: '#888' }} className={textCenter}>
                        Brand 0
                    </div>
                )}
                <div
                    className={cls(priceCl, {
                        [textCenter]: !isHomePage
                    })}
                    style={{
                        color: isHomePage ? '#333' : '#888'
                    }}
                >
                    ${price}
                </div>

                {!isHomePage && (
                    <div className={cls(boxBtn, {[leftBtn]: !isShowGrid})}>
                        <Button content={'ADD TO CART'} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
