import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import axios from '../api/axiosClient';
import HeaderShop from '../components/shop/Header';
import ProductSlider from '../components/shop/ProductSlider';
import SizeProduct from '../components/shop/Size';
import ProductDetail from '../components/shop/Detail';
import SimilarProducts from '../components/shop/Similar';
import { useNavigate } from 'react-router-dom';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/products/getAll').then((res) => setProducts(res.data));
  }, []);

  const handleAddToCart = async (id: number) => {
    await axios.post('/cart/add', { productId: id, quantity: 1 });
    navigate('/checkout');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: '20px',
        height: '100%',
        width: '100%',
        flex: 1,
        bgcolor: '#f9f9f9',
        overflowY: 'scroll',
        scrollbarWidth: 'none',   
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <HeaderShop />
      <ProductSlider image={products[0]?.image} />
      <SizeProduct />
      <ProductDetail {...products[0]} onAddToCart={handleAddToCart} />
      <SimilarProducts products={products} />
    </Box>
  );
};

export default Shop;
