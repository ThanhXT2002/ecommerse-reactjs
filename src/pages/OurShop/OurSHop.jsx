import MyHeader from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import styles from './styles.module.scss';
import { useNavigate } from "react-router-dom";
import BannerOurShop from "@pages/OurShop/components/Banner";
import { OurShopProvider } from "@contexts/OurShopProvider";
import Fillter from "@pages/OurShop/components/Filter";
import ListProducts from "@pages/OurShop/components/ListProducts";

function OurShop() {
    const { container, functionBox,specialTex,btnback } = styles;

    const navigate = useNavigate();

    const handleBackPreviousPage = () => {
        navigate(-1);
    }

    return (
        <OurShopProvider>
            <MyHeader />
            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div>Home &gt; <span className={specialTex}>Shop</span></div>
                        <div className={btnback} onClick={()=>handleBackPreviousPage()}>
                            &lt; Return to previous page
                        </div>
                    </div>
                </div>

                <BannerOurShop/>
                <div>
                    <Fillter/>
                    <ListProducts/>
                </div>
            </MainLayout>
        </OurShopProvider>
    );
}

export default OurShop;