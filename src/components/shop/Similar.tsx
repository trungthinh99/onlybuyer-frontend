import { Box, Typography } from '@mui/material';
import type { Product } from '../../pages/Shop';
import FilterShop from './Filter';
import { useNavigate } from 'react-router-dom';

interface SimilarProductsProps {
  products: Product[];
}

const SimilarProducts = ({ products = [] }: SimilarProductsProps) => {
  const navigate = useNavigate();
  const productShift = products.slice(1, products.length) || [];
  
  return (
    <Box>
      <FilterShop />
      <Typography sx={{ fontSize: 18, fontWeight: 600, mt: 2, mb: 1 }}>Similar To</Typography>
      <Typography sx={{ fontSize: 14, color: '#888', mb: 2 }}>282+ Items</Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'space-between',
        }}
      >
        {productShift.map((product) => (
          <Box
            key={product.id}
            sx={{
              flex: '0 0 calc(50% - 6px)',
              bgcolor: '#fff',
              borderRadius: '8px',
              boxShadow: '0px 1px 4px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
            }}
            onClick={() => navigate(`/shop/${product.id}`)}
          >
            <Box
              component="img"
              src={product.image}
              alt={product.name}
              sx={{
                width: '100%',
                height: '136px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />

            <Box sx={{ p: '8px 10px' }}>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: 1.3,
                  mb: '4px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {product.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: 400,
                  lineHeight: 1.3,
                  mb: '4px',
                }}
              >
                Lorem Ipsum is simply dummy text of the...
              </Typography>

              <Typography
                sx={{
                  fontSize: '12px',
                  color: '#666',
                  lineHeight: 1.3,
                  mb: '6px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {product.description}
              </Typography>

              <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>
                ₹{product.price.toLocaleString()}
              </Typography>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: '8px', mt: '4px', ml: '-2px' }}
              >
                <Box sx={{ display: 'flex', gap: '1px' }}>
                  {[1, 2, 3, 4].map((_, index) => (
                    <img
                      key={index}
                      src="/assets/ic-star.png"
                      alt="star-filled"
                      width={11}
                      height={11}
                    />
                  ))}
                  <img src="/assets/ic-half-star.png" alt="star-empty" width={11} height={11} />
                </Box>
                <Typography
                  sx={{
                    fontSize: '10px',
                    fontWeight: 400,
                    color: '#828282',
                  }}
                >
                  171,999
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SimilarProducts;
