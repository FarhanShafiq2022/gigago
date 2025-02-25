import React from 'react';
import { Card, CardContent, Typography, Button, IconButton, Box } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Slider from 'react-slick';
import { styled } from '@mui/system';


const SliderContainer = styled(Box)(({ theme }) => ({

  margin: "40px 0",
  padding: "0 30px",
  [theme.breakpoints.down('sm')]: {
    padding: "0 15px",
  },
  position: "relative",
}));

const ProductCard = styled(Card)(({ theme }) => ({
  width: "350px",
  height: "350px",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  "&:hover": {
    transform: "translateY(-10px)",
          
  },
}));

const SaleBadge = styled(Box)({
  position: "absolute",
  top: "12px",
  left: "12px",
  backgroundColor: "darkgreen",
  color: "#ffffff",
  padding: "4px 12px",
  borderRadius: "15px",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.5px",
});

const ArrowButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  zIndex: 10,
  transform: "translateY(-50%)",
  background: "#000",
  color: "#fff",
  width: "40px",
  height: "40px",
  overflow: "hidden",
  "&:hover": {
    background: "#333",
  },
  "&.slick-prev": {
    left: "10px",
  },
  "&.slick-next": {
    right: "10px",
  },
}));

const ProductSlider = ({ products, title, buttonText }) => {
  const sliderSettings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: (
      <ArrowButton>
        <ChevronRightIcon fontSize="large" />
      </ArrowButton>
    ),
    prevArrow: (
      <ArrowButton>
        <ChevronLeftIcon fontSize='large'/>
      </ArrowButton>
    ),
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 4 } },
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
      <Typography variant="h4" align="center" fontWeight={700} mb={6}>
        {title}
      </Typography>
      
      <SliderContainer>
        <Slider {...sliderSettings} >
          {products.map((product, index) => (
            <ProductCard className='myproductslider' key={index}>
              <Box sx={{ position: 'relative', padding: 2,margin: '0 20px',}}>
                {product.discountedPrice && <SaleBadge>SALE</SaleBadge>}
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ 
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                    borderRadius: "8px",
                 
                  }}
                />
              </Box>
              
              <CardContent sx={{ textAlign: 'center', pt: 0 }}>
                <Typography variant="body1" fontWeight={600} mb={1}>
                  {product.title}
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5 }}>
                  {product.originalPrice && (
                    <Typography variant="body2" color="textSecondary" sx={{ textDecoration: "line-through" }}>
                      {product.originalPrice}
                    </Typography>
                  )}
                  <Typography variant="h6" color="#6d1b7b" fontWeight={700}>
                    {product.discountedPrice || product.price}
                  </Typography>
                </Box>
              </CardContent>
            </ProductCard>
          ))}
        </Slider>
      </SliderContainer>

      <Box textAlign="center" mt={6}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000000",
            color: "#ffffff",
            padding: "12px 80px",
            borderRadius: "50px",
            fontWeight: 700,
            "&:hover": {
              backgroundColor: "#ffffff",
              border: "1px solid #000000",
              color: "#000000",
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default ProductSlider;