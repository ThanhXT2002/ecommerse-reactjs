import CountdownTimer from '@components/CountdownTimer/CoundownTimer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function CountdownBanner() {
    const { container, containerTimmer, title, boxBtn } = styles;
    const targetDate = '2025-12-31T23:59:59';
    return (
        <div className={container}>
            <div className={containerTimmer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The classics make a comeback</p>
            <div className={boxBtn} >
                <Button content={'Buy Now'}/>
            </div>
        </div>
    );
}

export default CountdownBanner;
