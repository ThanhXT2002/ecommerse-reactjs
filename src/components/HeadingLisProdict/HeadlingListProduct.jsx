import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownTimer from '@components/CountdownTimer/CoundownTimer';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProduct() {
    const targetDate = '2025-12-31T23:59:59';
    const { container ,containerItem} = styles;

    return (
        <MainLayout>
            {/* <CountdownTimer targetDate={targetDate}/> */}
            <div className={container}>
               <CountdownBanner />
                <div className={containerItem}>
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;
