import { SidebarContext } from '@/context/SidebarProvider';
import styles from '../Header.module.scss';
import { useContext, useState } from 'react';
import { StoreContext } from '@/context/storeProvider';
import { useNavigate } from 'react-router-dom';


function Menu({ content, href }) {
    const { menu, subMenu } = styles;
    const { setIsOpen, setType } = useContext(SidebarContext);
    const { userInfo, handleLogOut } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const navigate = useNavigate();

    const handleClickShowLogin = () => {
        if (content === 'Sign in' && !userInfo) {
            setIsOpen(true);
            setType('login');
        }

        if(content ==='Our Shop'){
            navigate('/shop');
        }
    };

    const handleRenderText = (content) => {
        if (content === 'Sign in' && userInfo) {
            return `Hello: ${userInfo.username}`;
        } else {
            return content;
        }
    };

    const handleHover = () => {
        console.log(content);
        if (content === 'Sign in' && userInfo) {
            setIsShowSubMenu(true);
        }
    };



    return (
        <div
            className={menu}
            onMouseEnter={handleHover}
            onClick={handleClickShowLogin}
        >
            {handleRenderText(content)}
            {isShowSubMenu && <div 
            onMouseLeave={() => setIsShowSubMenu(false)}
            onClick={handleLogOut}
            className={subMenu}>
                LOG OUT
                </div>}
        </div>
    );
}

export default Menu;
