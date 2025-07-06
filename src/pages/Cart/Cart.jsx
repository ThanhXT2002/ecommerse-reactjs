import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import MyFooter from '@components/Footer/Footer';
import Steps from '@pages/Cart/components/Steps/Steps';
import Contents from '@pages/Cart/components/Contents/Contens';

function Cart() {

    const { container } = styles;

    return ( 
        <>
           <MyHeader/>
           <div className={container}>
             <Steps/>
            <Contents/>
           </div>
           <MyFooter/>
        </>
    );
}

export default Cart;