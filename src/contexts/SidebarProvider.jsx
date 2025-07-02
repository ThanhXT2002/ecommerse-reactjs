import React, { useState, createContext } from 'react';

// Tạo context để chia sẻ trạng thái sidebar giữa các component
export const SidebarContext = createContext();

// Tạo provider để bọc các component cần sử dụng context này
export const SidebarProvider = ({ children }) => {
    // Khai báo state để quản lý trạng thái mở/đóng của sidebar
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState(''); // Thêm state để quản lý loại sidebar

    const value= {isOpen, setIsOpen, type, setType};

    return (
        // Truyền giá trị state và hàm setState xuống các component con qua context
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
};