import styles from './styles.module.scss';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SidebarContext } from '@contexts/SidebarProvider';
import { ToastContext } from '@contexts/ToastProvider';
import { addProductToCart } from '@/apis/cartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { CiHeart } from 'react-icons/ci';
import { LiaEyeSolid, LiaShoppingBagSolid } from 'react-icons/lia';
import { TfiReload } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';

function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomePage = true,
    slideItem = false
}) {
    // const context = useContext(OurShopContext);
    // const isShowGrid = isHomePage ? true : (context?.isShowGrid ?? true);
    const [sizeChoose, setSizeChoose] = useState('');
    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
    const userId = Cookies.get('userId');
    const { setIsOpen, setType, handleGetListProductsCart, setDetailProduct } =
        useContext(SidebarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {
        containerItem,
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
    };

    const handleClearSize = () => {
        setSizeChoose('');
    };

    const handleAddToCart = () => {
        if (!userId) {
            setIsOpen(true);
            setType('login');
            toast.error('Please login to add items to your cart');
            return;
        }

        if (!sizeChoose) {
            toast.warning('Please choose a size before adding to cart');
            return;
        }

        const data = {
            userId,
            productId: details._id,
            quantity: 1,
            size: sizeChoose
        };

        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                console.log(res);
                setIsOpen(true);
                setType('cart');
                toast.success('Product added to cart successfully');
                setIsLoading(false);
                handleGetListProductsCart(userId, 'cart');
            })
            .catch((error) => {
                console.error('Error adding product to cart:', error);
                oast.error('Failed to add product to cart');
                setIsLoading(false);
            });
    };

    const handleShowDetailProductSideBar = () => {
        setIsOpen(true);
        setType('detail');
        setDetailProduct(details);
    };

    const handleNavigateToDetail = () => {
        navigate('/product/' + details._id);
    };

    useEffect(() => {
        if (isHomePage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomePage, ourShopStore?.isShowGrid]);

    useEffect(() => {
        if (slideItem) {
            setIsShowGrid(true);
        }
    }, [slideItem]);

    return (
        <div
            className={isShowGrid ?'' : containerItem}
            style={{
                cursor: 'pointer'
            }}
        >
            <div className={cls(boxImg, { [largImg]: !isShowGrid })}  onClick={handleNavigateToDetail}>
                <img src={src} alt="img 1" />
                <img src={prevSrc} alt="img 2" className={showImgWhenHover} />
                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <LiaShoppingBagSolid
                            style={{
                                fontSize: '20px'
                            }}
                        />
                    </div>
                    <div className={boxIcon}>
                        <CiHeart
                            style={{
                                fontSize: '25px'
                            }}
                        />
                    </div>
                    <div className={boxIcon}>
                        <TfiReload
                            style={{
                                fontSize: '20px'
                            }}
                        />
                    </div>
                    <div
                        className={boxIcon}
                        onClick={handleShowDetailProductSideBar}
                    >
                        <LiaEyeSolid
                            style={{
                                fontSize: '23px'
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className={isShowGrid ? '' : content}
            style={{ 
                marginTop: slideItem && '10px'
                 }}>
                {!isHomePage && (
                    <div className={boxSize}>
                        {details?.size.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={cls(size, {
                                        [isActiveSize]: sizeChoose === item.name
                                    })}
                                    onClick={() => handleChooseSize(item.name)}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}

                {sizeChoose && !isHomePage && (
                    <div className={btnClear} onClick={() => handleClearSize()}>
                        Clear
                    </div>
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
                    <div className={cls(boxBtn, { [leftBtn]: !isShowGrid })}>
                        <Button
                            content={
                                isLoading ? (
                                    <LoadingTextCommon />
                                ) : (
                                    'ADD TO CART'
                                )
                            }
                            onClick={handleAddToCart}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
