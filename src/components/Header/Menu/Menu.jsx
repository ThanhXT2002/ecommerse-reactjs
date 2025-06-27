import { SidebarContext } from '@/context/SidebarProvider';
import styles from '../Header.module.scss';
import { useContext } from 'react';

function Menu({ content, href }) {
    const { menu } = styles;
    const { setIsOpen, setType } = useContext(SidebarContext);

    const handleClickShowLogin = () => {
        if (content === 'Sign in') {
            setIsOpen(true);
            setType('login');
        }
    };

    return (
        <div className={menu} onClick={handleClickShowLogin}>
            {content}
        </div>
    );
}

export default Menu;
