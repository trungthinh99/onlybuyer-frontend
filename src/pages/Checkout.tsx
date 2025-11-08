import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Chip, Divider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from '../api/axiosClient';

import { useNavigate } from 'react-router-dom';
import type { Product } from './Shop';

interface Cart {
  id: number;
  product: Product;
  productId: number;
  quantity: number;
}

const Checkout = () => {
  const navigate = useNavigate();
  const [carts, setCarts] = useState<Cart[]>([]);

  useEffect(() => {
    axios.get('/cart/getAll').then((res) => setCarts(res.data));
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: '20px',
        height: '100%',
        width: '100%',
        flex: 1,
        bgcolor: 'fdfdfd',
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <img
          src="/public/assets/ic-back.png"
          alt="icon-back"
          style={{ position: 'absolute', left: 0 }}
          onClick={() => navigate('/shop')}
        />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Checkout
        </Typography>
      </Box>

      {/* Delivery Address */}
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: '6px' }}>
          <img src="/public/assets/ic-delivery.png" alt="ic-delivery" width={12} height={15} />
          <Typography
            sx={{
              fontWeight: 600,
            }}
          >
            Delivery Address
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          <Box
            sx={{
              flex: 1,
              p: 1.2,
              borderRadius: '10px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>Address :</Typography>
              <EditIcon sx={{ fontSize: '16px', cursor: 'pointer' }} />
            </Box>

            <Typography sx={{ fontSize: '12px', fontWeight: 400 }}>
              216 St Paul&apos;s Rd, London
            </Typography>
            <Typography sx={{ fontSize: '12px', fontWeight: 400 }}>
              Contact : +44-7842432
            </Typography>
          </Box>

          <Box
            sx={{
              width: '79px',
              height: '79px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
              cursor: 'pointer',
            }}
          >
            <AddIcon />
          </Box>
        </Box>
      </Box>

      {/* Shopping List */}
      <Typography sx={{ fontWeight: 600, mb: 1, fontSize: '14px' }}>Shopping List</Typography>

      {carts.length === 0 && (
        <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#888' }}>
          No item in cart
        </Typography>
      )}

      {carts?.map((cart) => (
        <Box
          key={cart.id}
          sx={{
            bgcolor: '#fff',
            borderRadius: '10px',
            p: 1.5,
            mb: 2,
            boxShadow: '0px 6px 14px -8px #00000040',
          }}
        >
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <Box
              component="img"
              src={cart.product.image}
              alt={cart.product.name}
              sx={{
                width: 130,
                height: 125,
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 600, fontSize: '14px', mb: 0.5 }}>
                {cart.product.name}
              </Typography>

              <Typography sx={{ fontSize: '12px', fontWeight: 500, mb: 0.5 }}>
                Variations :{' '}
                <Chip
                  label="Black"
                  size="small"
                  sx={{
                    fontSize: '11px',
                    borderRadius: '4px',
                    ml: '4px',
                    border: '1px solid #ccc',
                    bgcolor: 'white',
                  }}
                />
                <Chip
                  label="Red"
                  size="small"
                  sx={{
                    fontSize: '11px',
                    borderRadius: '4px',
                    ml: '4px',
                    border: '1px solid #ccc',
                    bgcolor: 'white',
                  }}
                />
              </Typography>

              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: '8px', mt: '4px', ml: '-2px' }}
              >
                <Box sx={{ display: 'flex', gap: '1px' }}>
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 500,
                    }}
                  >
                    4.8
                  </Typography>
                  {[1, 2, 3, 4].map((_, index) => (
                    <img
                      key={index}
                      src="/public/assets/ic-star.png"
                      alt="star-filled"
                      width={13}
                      height={13}
                    />
                  ))}
                  <img src="/public/assets/ic-half-star.png" alt="star-empty" width={13} height={13} />
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 1,
                }}
              >
                <Chip
                  label={'$' + cart.product.price.toLocaleString('en-US')}
                  size="small"
                  sx={{
                    fontSize: '16px',
                    fontWeight: 600,
                    borderRadius: '4px',
                    border: '1px solid #CACACA',
                    bgcolor: 'white',
                    height: '29px',
                  }}
                />
                <Box sx={{ textAlign: 'right' }}>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      color: 'red',
                      fontWeight: 500,
                    }}
                  >
                    upto 33% off
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '11px',
                      color: '#999',
                      textDecoration: 'line-through',
                    }}
                  >
                    $54.00
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 1 }} />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>{`Total Order (${cart.quantity}) :`}</Typography>
            <Typography sx={{ fontWeight: 600 }}>${(cart.product.price * cart.quantity).toLocaleString('en-US')}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Checkout;
