import { SidebarContext } from '@/context/SidebarProvider';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { TfiClose } from 'react-icons/tfi';

function SideBar() {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen } = useContext(SidebarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
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
            </div>
        </div>
    );
}

export default SideBar;
