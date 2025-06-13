import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from '@styles/main.module.scss';
import MyButton from '@components/Button/Button';

function App() {
    return (
        <MainLayout>
            <MyHeader />
            <main className={styles.content}>
              <MyButton></MyButton>
                <h1>Welcome to Marseille Store</h1>
                <p>This is the main content area</p>
            </main>
            <MyFooter />
        </MainLayout>
    );
}

export default App;
