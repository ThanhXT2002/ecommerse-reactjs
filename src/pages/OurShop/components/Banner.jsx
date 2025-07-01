import CountdownTimer from '@components/CountdownTimer/CoundownTimer';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';


function BannerOurShop() {
    const { containerBanner ,contentBox,title, boxBtn, countDownBox} = styles;
    const targetDate = '2025-12-31T23:59:59'; // Set your target date here (end of 2025)
    // console.log(targetDate);
    return (
        <>
            <div className={containerBanner}>
                <div className={contentBox}>
                    <div className={countDownBox}>
                        <CountdownTimer targetDate={targetDate}/>
                    </div>
                    <div className={title}>
                        The Classics Make A ComeBack
                    </div>
                    <div className={boxBtn}>
                         <Button content='Buy Now'/>
                    </div>
                   
                </div>
            </div>
        </>
    );
}

export default BannerOurShop;
