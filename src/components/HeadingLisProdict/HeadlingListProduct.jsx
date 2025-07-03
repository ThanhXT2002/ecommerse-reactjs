import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownTimer from '@components/CountdownTimer/CoundownTimer';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProduct({data}) {
    const targetDate = '2025-12-31T23:59:59';
    const { container ,containerItem} = styles;

    return (
        <MainLayout>
            {/* <CountdownTimer targetDate={targetDate}/> */}
            <div className={container}>
               <CountdownBanner />
                <div className={containerItem}>
                    {data.map((item, index) => (
                        <ProductItem key={index} 
                        src={item.images[0]}
                        prevSrc={item.images[1]}
                        name={item.name}
                        price={item.price}
                        details={item}
                         />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;
