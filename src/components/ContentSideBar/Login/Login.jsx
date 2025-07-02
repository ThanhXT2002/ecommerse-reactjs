import InputCommon from '@components/InputCommon/inputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ToastContext } from '@contexts/ToastProvider';
import { register, signIn } from '@/apis/authService';
import Cookies from 'js-cookie';
import { SidebarContext } from '@contexts/SidebarProvider';
import { StoreContext } from '@contexts/storeProvider';

function Login() {
    const { container, title, lostPassword, boxRememberMe, boxBtnLogin } =
        styles;
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);

    const { setIsOpen } = useContext(SidebarContext);
    const { setUserId } = useContext(StoreContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            cfmpassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Passwords must match'
            )
        }),
        onSubmit: async (values) => {
            if (isLoading) return; // Prevent multiple submissions
            setIsLoading(true);
            const { email: username, password } = values;
            if (isRegister) {
                await register({ username, password })
                    .then((res) => {
                        toast.success(
                            res.data.message || 'Registration successful'
                        );
                        setIsLoading(false);
                    })
                    .catch((error) => {
                        toast.error(
                            error.response?.data?.message ||
                                'Registration failed'
                        );
                        setIsLoading(false);
                    });
            }

            if (!isRegister) {
                setIsLoading(true);
                await signIn({ username, password })
                    .then((res) => {
                        toast.success(res.data.message || 'Login successful');
                        setIsLoading(false);
                        const { id, token, refreshToken } = res.data;
                        setUserId(id);
                        Cookies.set('userId', id);
                        Cookies.set('token', token);
                        Cookies.set('refreshToken', refreshToken);
                        setIsOpen(false);
                    })
                    .catch((error) => {
                        toast.error(
                            error.response?.data?.message || 'Login failed'
                        );
                        setIsLoading(false);
                    });
            }
        }
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };

    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>

            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id="email"
                    label="Email"
                    type="text"
                    isRequired
                    formik={formik}
                />
                <InputCommon
                    id="password"
                    label="Password"
                    type="password"
                    isRequired
                    formik={formik}
                />

                {isRegister && (
                    <InputCommon
                        id="cfmpassword"
                        label="Confirm Password"
                        type="password"
                        isRequired
                        formik={formik}
                    />
                )}
                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input type="checkbox" name="" id="" />
                        <span>Remember me</span>
                    </div>
                )}

                <div className={boxBtnLogin}>
                    <div style={{ width: '100%' }}>
                        <Button
                            content={
                                isLoading
                                    ? 'LOADING...'
                                    : isRegister
                                    ? 'REGISTER'
                                    : 'LOGIN'
                            }
                            type="submit"
                            // onClick={() => toast.success('Login successful!')}
                        />
                    </div>
                </div>
            </form>
            <Button
                content={
                    isRegister
                        ? 'Already have an account? Sign In'
                        : 'Create an account'
                }
                isPrimary={false}
                type="text"
                style={{ marginTop: '10px' }}
                onClick={handleToggle}
            />

            {!isRegister && (
                <div className={lostPassword}>Lost your password?</div>
            )}
        </div>
    );
}

export default Login;
