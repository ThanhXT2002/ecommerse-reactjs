import axiosClinet from './axiosClient';

const addProductToCart = async (data) => {
    return await axiosClinet.post('/cart', data);
};

const getCart = async (userId) => {
    return await axiosClinet.get(`/cart/${userId}`);
};


export {addProductToCart,getCart}