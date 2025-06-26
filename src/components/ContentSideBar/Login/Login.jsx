
import InputCommon from '@components/InputCommon/inputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function Login() {

    const { container,title,lostPassword,boxRememberMe,boxBtnLogin } = styles;
    return ( 
        <div className={container}>
            <div className={title}>SIGN IN</div>

            <InputCommon label='Email' type='text' isRequired/>
            <InputCommon label='Password' type='password' isRequired/>
            <div className={boxRememberMe}>
                <input type="checkbox" name="" id="" />
                <span>Remember me</span>
            </div>
            <div className={boxBtnLogin}>
                <Button content={'LOGIN'} />
            </div>
            
            <div className={lostPassword}>
                Lost your password? 
            </div>
        </div>
     );
}

export default Login;