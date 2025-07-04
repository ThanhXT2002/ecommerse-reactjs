import HeaderSidebar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSidebar';
import styles from './styles.module.scss';
import { TfiReload } from 'react-icons/tfi';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function Compare() {
    const { container} = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSidebar
                    icon={<TfiReload style={{ fontSize: '30px' }} />}
                    title="COMPARE"
                />
                <ItemProduct />
            </div>
            <div>
                <Button content={'VIEW COMPARE'} />
            </div>
        </div>
    );
}

export default Compare;
