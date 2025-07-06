import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import MyFooter from '@components/Footer/Footer';
import Steps from '@pages/Cart/components/Steps/Steps';
import Contents from '@pages/Cart/components/Contents/Contens';
import MainLayout from '@components/Layout/Layout';

function Cart() {

    const { container } = styles;

    return ( 
        <>
           <MyHeader/>
           <div className={container}>
             <Steps/>
              <MainLayout>
            <Contents/>

              </MainLayout>
           </div>
           <MyFooter/>
        </>
    );
}

export default Cart;