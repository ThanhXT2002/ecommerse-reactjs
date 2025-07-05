import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './Header.module.scss';
import Menu from './Menu/Menu';
import Logo from '@icons/images/Logo-retina.webp';
import { TfiReload } from 'react-icons/tfi';
import { IoIosHeartEmpty } from 'react-icons/io';
import { PiShoppingCart } from 'react-icons/pi';
import { useContext, useEffect, useState } from 'react';
import useScrollHandling from '@/hooks/useScrollHandling';
import classname from 'classnames';
import { SidebarContext } from '@contexts/SidebarProvider';
import Cookies from 'js-cookie';

function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        contanerHeader,
        containerBox,
        container,
        topHeader,
        fixedHeader,
        boxCart,
        quantityCart
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFiexedPosition] = useState(false);

    const { setIsOpen, setType, listProductCart, handleGetListProductsCart } = useContext(SidebarContext);

    const handleOpenSidebar = (type) => {
        setIsOpen(true);
        setType(type);
        
        // Nếu mở cart, thì gọi API để lấy danh sách sản phẩm
        if (type === 'cart') {
            const userId = Cookies.get('userId');
            if (userId) {
                handleGetListProductsCart(userId, type);
            }
        }
    };

    // console.log('isOpen', isOpen);

    useEffect(() => {
        // if (scrollPosition > 80) {
        //    setFiexedPosition(true);
        // } else {
        //    setFiexedPosition(false);
        // }
        // setFiexedPosition(scrollPosition > 80?true:false);
        setFiexedPosition(scrollPosition > 80);
    }, [scrollPosition]);

    return (
        <header
            className={classname(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
            <div className={contanerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item, index) => (
                            <BoxIcon
                                key={index}
                                type={item.type}
                                href={item.href}
                            ></BoxIcon>
                        ))}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item, index) => (
                            <Menu
                                key={index}
                                content={item.content}
                                href={item.href}
                            ></Menu>
                        ))}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt="logo"
                        style={{
                            width: '153px',
                            height: '53px'
                        }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu
                            .slice(3, dataMenu.length)
                            .map((item, index) => (
                                <Menu
                                    key={index}
                                    content={item.content}
                                    href={item.href}
                                ></Menu>
                            ))}
                    </div>
                    <div className={containerBoxIcon}>
                        <TfiReload
                            style={{ fontSize: '20px' }}
                            onClick={() => handleOpenSidebar('compare')}
                        />
                        <IoIosHeartEmpty
                            style={{ fontSize: '25px' }}
                            onClick={() => handleOpenSidebar('wishlist')}
                        />
                        <div className={boxCart}>
                            <PiShoppingCart
                                style={{ fontSize: '25px' }}
                                onClick={() => handleOpenSidebar('cart')}
                            />
                            {/* {listProductCart.length > 0 && (
                                <div className={quantityCart}>
                                    {listProductCart.length}
                                </div>
                            )} */}
                            <div className={quantityCart}>
                                    {listProductCart.length}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MyHeader;
