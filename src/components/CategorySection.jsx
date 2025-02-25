import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";

const categories = [
  { name: "Computers", image: "../images/categoryimages/Computers.jpg" },
  { name: "Mobile", image: "../images/categoryimages/Mobile.jpg" },
  { name: "Drones & Cameras", image: "../images/categoryimages/Drones.jpg" },
  { name: "Sale", image: "../images/categoryimages/Sale.png", highlight: true },
  { name: "Tablets", image: "../images/categoryimages/Tablets.jpg" },
  { name: "Best Sellers", image: "../images/categoryimages/Best Sellers.png" },
  { name: "T.V & Home Cinema", image: "../images/categoryimages/T.V & Home Cinema.jpg" },
  { name: "Wearable Tech", image: "../images/categoryimages/Wearable Tech.jpg" },
  { name: "Speakers", image: "../images/categoryimages/Speakers.jpg" },
  { name: "Headphones", image: "../images/categoryimages/Headphones.jpg" },
];

const CategoryBox = styled(Box)(({ theme, highlight }) => ({
  
  width: "200px",
  height: "200px",
  backgroundColor: highlight ? "#6d1b7b" : "#f5f5f5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
    position: "relative",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    zIndex: 20,
    transform: "scale(1.05)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "120px",
    height: "120px",
  },
}));

const CategoryImage = styled("img")({
  width: "100%",
  height: "100%",
  overflowX: "visible",
  objectFit: "cover",
  borderRadius: "50%",
});

const CategorySection = () => {
  return (
    <Box textAlign="center" py={6}>
      <Typography variant="h5" fontWeight={700} mb={4}>
        Shop by Category
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item key={index}>
            <NavLink to={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`} style={{ textDecoration: "none", color: "inherit" }}>
              <CategoryBox highlight={category.highlight}>
                <CategoryImage src={category.image} alt={category.name} />
              </CategoryBox>
              <Typography mt={1} fontWeight={600}>
                {category.name}
              </Typography>
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorySection;
