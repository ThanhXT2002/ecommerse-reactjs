import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function AdvanceHeadling() {
    const { container, headline, containerMiddleBox, des, title } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <p className={des}>don't miss super offers</p>
                <div className={containerMiddleBox}>
                    <div className={headline}></div>
                    <p className={title}>Our best products</p>
                    <div className={headline}></div>
                </div>
            </div>
        </MainLayout>
    );
}

export default AdvanceHeadling;
