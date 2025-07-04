import styles from './styles.module.scss';
import { AiOutlineLoading3Quarters } from "react-icons/ai";


function LoadingTextCommon() {

    const { loadingIcon } = styles;
    return ( <AiOutlineLoading3Quarters className={loadingIcon}/> );
}

export default LoadingTextCommon;