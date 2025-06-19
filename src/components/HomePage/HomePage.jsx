import Banner from '@components/Banner/Banner';
import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingLisProdict/HeadlingListProduct';


function HomePage() {

     const{ container } = styles;

    return (
    <div>
        <div className={container}>
            <MyHeader />
            <Banner />
            <Info/>
            <AdvanceHeadling/>
            <HeadingListProduct/>
            
        </div>
       
        
    </div>
    );
}

export default HomePage;
