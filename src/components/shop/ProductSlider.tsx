import Box from '@mui/material/Box';
import Slider from 'react-slick';

interface ProductSliderProps {
  image: string;
}

const ProductSlider = ({ image }: ProductSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
  };
  const images = Array(4).fill(image);

  return (
    <Box sx={{ mt: '20px'}}>
      <Slider {...settings} className='slider-product-image'>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Product ${index + 1}`}
              style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductSlider;
