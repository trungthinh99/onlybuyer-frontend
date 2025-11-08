import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const SizeProduct = () => {
  const sizes = ['6 UK', '7 UK', '8 UK', '9 UK', '10 UK'];

  return (
    <Box sx={{ mt: '20px' }}>
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 600,
        }}
      >
        Size: 7UK
      </Typography>

      <Box sx={{ display: 'flex', gap: '8px', mt: '10px' }}>
        {sizes.map((size) => (
          <Box
            key={size}
            sx={{
              border: '1.5px solid #FA7189',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3px 6px',
              bgcolor: size === '7 UK' ? '#FA7189' : 'transparent',
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 600,
                textAlign: 'right',
                color: size === '7 UK' ? '#FFFFFF' : '#FA7189',
              }}
            >
              {size}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default SizeProduct;
