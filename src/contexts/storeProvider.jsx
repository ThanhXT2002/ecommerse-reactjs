import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Cookies from 'js-cookie';
import { getInfo } from '@/apis/authService';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [userId, setUserId] = useState(Cookies.get('userId') );

    // const userId = Cookies.get('userId');

    const handleLogOut = () => {
        Cookies.remove('token');
        Cookies.remove('refreshToken');
        Cookies.remove('userId');
        setUserInfo(null);
        window.location.reload();
    };

    useEffect(() => {
        if(userId) {
            getInfo(userId)
                .then((res) => {
                    setUserInfo(res.data.data);
                })
                .catch((error) => {
                    console.error('Failed to fetch user info:', error);
                });
        }
    },[userId]);
    
    return (
        <StoreContext.Provider value={{ userInfo, handleLogOut, setUserId }}>
            {children}
        </StoreContext.Provider>
    );
};