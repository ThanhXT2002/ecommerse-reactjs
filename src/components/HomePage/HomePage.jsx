import Banner from '@components/Banner/Banner';
import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';


function HomePage() {

     const{ container } = styles;

    return (
    <div>
        <div className={container}>
            <MyHeader />
            <Banner />
        </div>
       
        <main className={styles.content}>
          
            <h1>Welcome to Marseille Store</h1>
            <p>This is the main content area</p>
        </main>
        <MyFooter />
    </div>
    );
}

export default HomePage;
