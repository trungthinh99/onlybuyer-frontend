import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ProductDetailProps {
  id: number;
  name: string;
  price: number;
  description: string;
  onAddToCart: (id: number) => Promise<void>;
}

const ProductDetail = ({ id, name, price = 0, description, onAddToCart }: ProductDetailProps) => {
  return (
    <Box sx={{ mt: '14px' }}>
      {/* Name product */}
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: 600,
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 400,
          mt: '2px',
        }}
      >
        Vision Alta Men’s Shoes Size (All Colours)
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mt: '4px', ml: '-2px' }}>
        <Box sx={{ display: 'flex', gap: '1px' }}>
          {[1, 2, 3, 4].map((_, index) => (
            <img key={index} src="/public/assets/ic-star.png" alt="star-filled" />
          ))}
          <img src="/public/assets/ic-half-star.png" alt="star-empty" />
        </Box>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#828282',
          }}
        >
          56,890
        </Typography>
      </Box>

      {/* Price product */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mt: '4px' }}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 400,
            color: '#808488',
            textDecoration: 'line-through',
          }}
        >
          ₹{price.toLocaleString('en-US')}
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: 'black',
          }}
        >
          ₹{price.toLocaleString('en-US')}
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#FA7189',
          }}
        >
          50% Off
        </Typography>
      </Box>

      {/* Description product */}
      <Typography
        sx={{
          fontSize: '12px',
          fontWeight: 400,
          color: 'black',
          mt: '6px',
        }}
      >
        {description ||
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
      </Typography>

      <Box sx={{ display: 'flex', gap: '8px', mt: '6px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px',
            borderRadius: '4px',
            border: '1px solid #828282',
          }}
        >
          <img src="/public/assets/ic-location.png" alt="location" />
          <Typography
            sx={{
              fontSize: '10px',
              fontWeight: 500,
              color: '#828282',
            }}
          >
            Nearest Store
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px',
            borderRadius: '4px',
            border: '1px solid #828282',
          }}
        >
          <img src="/public/assets/ic-lock.png" alt="location" />
          <Typography
            sx={{
              fontSize: '10px',
              fontWeight: 500,
              color: '#828282',
            }}
          >
            VIP
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px',
            borderRadius: '4px',
            border: '1px solid #828282',
          }}
        >
          <img src="/public/assets/ic-return.png" alt="location" />
          <Typography
            sx={{
              fontSize: '10px',
              fontWeight: 500,
              color: '#828282',
            }}
          >
            Return policy
          </Typography>
        </Box>
      </Box>

      {/* Go to cart */}
      <Box sx={{ display: 'flex', gap: '8px', mt: '10px' }}>
        <img
          src="/public/assets/go-cart.png"
          alt="cart"
          height={40}
          width={'auto'}
          onClick={() => {
            onAddToCart(id);
          }}
        />
        <img src="/public/assets/buy-now.png" alt="buy" height={40} width={'auto'} />
      </Box>

      <Box
        sx={{
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#FFCCD5',
          padding: '12px 30px',
          mt: '14px',
        }}
      >
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          Delivery in
        </Typography>
        <Typography
          sx={{
            fontSize: '21px',
            fontWeight: 600,
          }}
        >
          1 within Hour
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '10px', gap: '4px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'white',
            borderRadius: '8px',
            border: '0.5px solid #D9D9D9',
            padding: '10px 0px',
            gap: '8px',
            flex: 1,
          }}
        >
          <img src="/public/assets/ic-eye.png" alt="eye" width={24}/>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            View Similar
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'white',
            borderRadius: '8px',
            border: '0.5px solid #D9D9D9',
            padding: '10px 0px',
            gap: '8px',
            flex: 1,
          }}
        >
          <img src="/public/assets/ic-compare.png" alt="compare" width={24} />
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Add to Compare
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
