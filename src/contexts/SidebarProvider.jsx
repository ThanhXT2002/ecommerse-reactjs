import React, { useState, createContext, useEffect } from 'react';
import { getCart } from '@/apis/cartService';
import Cookies from 'js-cookie';

// Tạo context để chia sẻ trạng thái sidebar giữa các component
export const SidebarContext = createContext();

// Tạo provider để bọc các component cần sử dụng context này
export const SidebarProvider = ({ children }) => {
    // Khai báo state để quản lý trạng thái mở/đóng của sidebar
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState(''); // Thêm state để quản lý loại sidebar
    const [listProductCart, setListProductCart] = useState([]); // Thêm state để quản lý danh sách sản phẩm trong giỏ hàng
    const userId = Cookies.get('userId');
    const [isLoading, setIsLoading] = useState(false);

    const handleGetListProductsCart = (userId, type) => {
        if (userId && type === 'cart') {
            setIsLoading(true);
            getCart(userId)
                .then((res) => {
                    setListProductCart(res.data.data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setListProductCart([]);
                    setIsLoading(false);
                });
        }
    };

    const value = {
        isOpen,
        setIsOpen,
        type,
        setType,
        handleGetListProductsCart,
        listProductCart,
        isLoading,
        setIsLoading,
        userId
    };

    useEffect(() => {
        if (userId) {
            handleGetListProductsCart(userId, 'cart');
        }
    }, [userId]);

    return (
        // Truyền giá trị state và hàm setState xuống các component con qua context
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
};
