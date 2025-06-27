import { SidebarContext } from '@/context/SidebarProvider';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { TfiClose } from 'react-icons/tfi';
import Login from '@components/ContentSideBar/Login/Login';
import Compare from '@components/ContentSideBar/Compare/Compare';

function SideBar() {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen,type } = useContext(SidebarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'compare':
                return <Compare/>;
            case 'wishlist':
                return 'wishlist';
            case 'cart':
                return 'cart';
            default:
                return <Login />;
        }
    };

    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isOpen
                })}
                onClick={handleToggle}
            />
            <div
                className={classNames(sideBar, {
                    [slideSideBar]: isOpen
                })}
            >
                {isOpen && (
                    <div className={boxIcon} onClick={handleToggle}>
                        <TfiClose />
                    </div>
                )}

                {handleRenderContent()}
            </div>
        </div>
    );
}

export default SideBar;
