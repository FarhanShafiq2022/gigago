import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Typography, Container } from "@mui/material";
import { color, styled } from "@mui/system";


// Slides Data
const slides = [
    {
      title: "Incredible Prices on All Your Favorite Items",
      subtitle: "Get more for less on selected brands",
      buttonText: "Shop Now",
      image: require("../assets/HeroSectionBanner.jpg"), // Replace with actual URL
    },
    {
      title: "Latest Tech Gadgets",
      subtitle: "Discover the newest trends in technology",
      buttonText: "Explore",
      image: require("../assets/HeroSectionBanner.jpg"), // Replace with actual URL
    },
  ];
  
  // Styled components
  const SlideContainer = styled(Box)({
    position: "relative",
    height: "80vh", // Default height for responsiveness
    color: "#000",
    // paddingLeft: "50px",
    opacity: 1,
    backgroundSize: "cover", // Ensures the image covers the container entirely
    backgroundPosition: "center", // Keeps the image centered in the container
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    transition: "all 0.5s ease", // Smooth transition for any background change
    '@media (max-width: 960px)': {
      height: "70vh", // Adjust height for tablet and below
    },
    '@media (max-width: 600px)': {
      height: "60vh", // Adjust height for mobile devices
    },
  });
  
  const Overlay = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.3)", // Semi-transparent overlay
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  });
  
  const Content = styled(Box)({
    position: "relative",
    maxWidth: "600px", // Set max width for content
    textAlign: "left",
    zIndex: 2,
    padding: "50px 20px",
    '@media (max-width: 960px)': {
      maxWidth: "90%", // Full width on tablet screens
      padding: "30px 20px",
    },
    '@media (max-width: 600px)': {
      maxWidth: "100%", // Full width on mobile screens
      textAlign: "center", // Center text for better readability
      padding: "20px 10px",
    },
  });
  
  const HeroSection = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true, // Enable fade effect
      dots: false, // Show dots inside the slider
      appendDots: dots => (
        <Box sx={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
          <ul style={{ display: 'flex', alignItems: "center", listStyleType: 'none', margin: 0, padding: 0 }}>
            {dots}
          </ul>
        </Box>
      ),
    };
  
    return (
      <Slider {...settings}>

        {slides.map((slide, index) => (
          <SlideContainer
            key={index}
            sx={{backgroundImage: `url(${slide.image})`}}>
            <Overlay />
            <Container>
              <Content>
                <Typography variant="h3" fontWeight="bold" mt={2}>
                  {slide.title}
                </Typography>
                <Typography variant="body1" mt={2} sx={{color: "#00000"}}>
                  {slide.subtitle}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    mt: 3,
                    borderRadius: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    "&:hover": {
              backgroundColor: "#ffffff",
              border: "1px solid #000000",
              color: "#000000",
            },
                    '@media (max-width: 600px)': {
                      padding: "10px 15px", // Adjust button padding for mobile
                    },
                  }}
                >
                  {slide.buttonText}
                </Button>
              </Content>
            </Container>
          </SlideContainer>
        ))}
      </Slider>
  );
};

export default HeroSection;
