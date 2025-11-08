import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';

const HeaderShop = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img
        src="/public/assets/ic-back.png"
        alt="icon-back"
        onClick={id ? () => navigate(-1) : () => null}
      />
      <img
        src="/public/assets/ic-cart.png"
        alt="icon-cart"
        height={32}
        width={32}
        onClick={() => {
          navigate('/checkout');
        }}
      />
    </Box>
  );
};

export default HeaderShop;
