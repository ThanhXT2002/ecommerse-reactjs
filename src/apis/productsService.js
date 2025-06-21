import axiosClient from './axiosClient';

const getProducts = async () => {
  const response = await axiosClient.get('/product');

  console.log(response);
  return response.data;
}
export {getProducts};