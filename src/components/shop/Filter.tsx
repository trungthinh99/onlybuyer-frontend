import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const FilterShop = () => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '20px' }}
    >
      <Typography
        sx={{
          fontSize: '18px',
          fontWeight: 600,
          textAlign: 'right',
          color: 'black',
        }}
      >
        52,082+ Iteams
      </Typography>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Box
          sx={{
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            border: '1px solid #E0E0E0',
            borderRadius: '4px',
            boxShadow: '1px 1px 16px 0px #00000014',
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 400,
              textAlign: 'right',
              color: 'black',
            }}
          >
            Sort
          </Typography>
          <img src="/assets/ic-sort.png" alt="sort-icon" width={16} height={'auto'} />
        </Box>
        <Box
          sx={{
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            border: '1px solid #E0E0E0',
            borderRadius: '4px',
            boxShadow: '1px 1px 16px 0px #00000014',
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 400,
              textAlign: 'right',
              color: 'black',
            }}
          >
            Sort
          </Typography>
          <img src="/assets/ic-filter.png" alt="filter-icon" width={16} height={'auto'} />
        </Box>
      </Box>
    </Box>
  );
};

export default FilterShop;
