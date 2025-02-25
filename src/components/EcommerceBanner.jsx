import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const banners = [
  {
    title: "Holiday Deals",
    discount: "Up to 30% off",
    description: "Selected Smartphone Brands",
    image: "../images/HomeBanner1.jpg", // Replace with actual image path
    bgColor: "#d92525",
  },
  {
    title: "Just In",
    discount: "Take Your Sound Anywhere",
    description: "Top Headphone Brands",
    image: "../images/HomeBanner2.jpg", // Replace with actual image path
    bgColor: "#6a0dad",
  },
];

const BannerContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const BannerCard = styled(Card)(({ theme, bgColor }) => ({
  backgroundColor: bgColor,
  color: "white",
  display: "flex",
  alignItems: "stretch",
  gap: "50px",
  justifyContent: "space-between",
  padding: "20px",
  borderRadius: "12px",
  minHeight: "350px",
  overflow: "hidden",
  position: "relative",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}));

const BannerImage = styled("img")({
  position: "absolute",
  right: "10px",
  bottom: "0",
  maxHeight: "100%",
  maxWidth: "50%",
  objectFit: "cover",
});

const EcommerceBanner = () => {
  return (
    <BannerContainer container spacing={2}>
      {banners.map((banner, index) => (
        <Grid item xs={12} md={6} key={index}>
          <BannerCard style={{ backgroundColor: banner.bgColor, backgroundImage: `url(${banner.image})` }}>
            <CardContent>
              <Typography variant="h6">{banner.title}</Typography>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {banner.discount}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {banner.description}
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: "white", color: banner.bgColor, 
                  "&:hover": {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
                 }}>
                Shop
              </Button>
            </CardContent>
          </BannerCard>
        </Grid>
      ))}
    </BannerContainer>
  );
};

export default EcommerceBanner;
