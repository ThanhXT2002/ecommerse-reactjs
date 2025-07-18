import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import MyFooter from '@components/Footer/Footer';
import Steps from '@pages/Cart/components/Steps/Steps';
import Contents from '@pages/Cart/components/Contents/Contens';
import MainLayout from '@components/Layout/Layout';
import { StepperProvider } from '@contexts/SteperProvider';
import ContentStep from '@pages/Cart/components/ContentStep';


function Cart() {

    const { container } = styles;
    return ( 
        <StepperProvider>
           <MyHeader/>
           <div className={container}>
             <Steps />
              <MainLayout>
            <ContentStep/>
              </MainLayout>
           </div>
           <MyFooter/>
        </StepperProvider>
    );
}

export default Cart;