import Button from '@components/Button/Button';
import styles from './styles.module.scss';


function Banner() {
    const{ container,content,title,des } = styles;
    return <div className={container}>
        <div className={content}>
            <h1 className={title}>Welcome to Marseille Store</h1>
            <div className={des}
            >Discover our exclusive collection of products</div>
             <Button content={"Go to shop"}/>
        </div>
    </div>;
}

export default Banner;