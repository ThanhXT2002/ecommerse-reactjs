import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './Header.module.scss';
import Menu from './Menu/Menu';
import Logo from '@icons/images/Logo-retina.webp'
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function MyHeader() {
    const { containerBoxIcon, containerMenu,contanerHeader,containerBox, container } = styles;

    return (
        <header className={container}>
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
              <img src={Logo} alt="logo" style={
                {
                  width: '153px',
                  height: '53px',
                }
              } />
            </div>
            <div className={containerBox}>
              <div className={containerMenu}>
                    {dataMenu.slice(3, dataMenu.length).map((item, index) => (
                        <Menu
                            key={index}
                            content={item.content}
                            href={item.href}
                        ></Menu>
                    ))}
                </div>
                <div className={containerBoxIcon}>
                    <img width={26} height={26} src={reloadIcon} alt="reLoadIcon" />
                    <img width={26} height={26} src={heartIcon} alt="heartIcon" />
                    <img width={26} height={26} src={cartIcon} alt="cartIcon" />
                </div>
            </div>
            </div>
           
            
        </header>
    );
}

export default MyHeader;
