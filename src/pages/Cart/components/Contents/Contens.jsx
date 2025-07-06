import CartTable from '@pages/Cart/components/Contents/CartTable';
import styles from '../../styles.module.scss';

function Contents() {
    const { containerContents } = styles;
    return (
        <div className={containerContents}>
            <div>
                <CartTable/>
            </div>
            <div>thành toán</div>
        </div>
    );
}

export default Contents;
