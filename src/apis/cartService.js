import axiosClinet from './axiosClient';

const addProductToCart = async (data) => {
    return await axiosClinet.post('/cart', data);
};

const getCart = async (userId) => {
    return await axiosClinet.get(`/cart/${userId}`);
};

const deleteItem = async (body) => {
    return await axiosClinet.delete(`/cart/deleteItem`,{data: body});
};


export {addProductToCart,getCart, deleteItem}