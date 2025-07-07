import CartTable from '@pages/Cart/components/Contents/CartTable';
import styles from '../../styles.module.scss';
import CartSummary from '@pages/Cart/components/Contents/CartSummary';

function Contents() {
    const { containerContents, containerRight } = styles;
    return (
        <div className={containerContents}>
            <div>
                <CartTable/>
            </div>
            <div className={containerRight}>
                <CartSummary/>
            </div>
        </div>
    );
}

export default Contents;
