import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";

const BestPriceContainer = styled(Box)(({ theme }) => ({
  padding: "40px 0px",
  borderRadius: "10px",
  width: "100%",
  color: "#000",    
  position: "relative",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
    textAlign: "center",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%", // Make sure it fills the parent height
  objectFit: "cover",
  borderRadius: "40px 0 40px 0",
  position: "relative",
  minHeight: "400px",
  overflowY: "hidden",
  [theme.breakpoints.down("md")]: {
    minHeight: "300px",
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "40px 0 40px 0",
});

const Badge = styled(Typography)({
  width: "50%",
  color: "#ffffff",
  borderRadius: "10px",
  backgroundColor: "#d32f2f",
  padding: "5px 5px",
  boxShadow: "4.0px 4.0px 8.0px #ffffff ",
  fontWeight: "bold",
});

const ContentBox = styled(Box)(({ theme }) => ({
  padding: "20px",
  position: "relative",
  zIndex: 2,
  height: "100%", // Ensures equal height
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#000000",
  borderTopLeftRadius: "40px",
  borderBottomRightRadius: "40px",
}));

const BestPriceSection = () => {
  return (
    <BestPriceContainer>
      <Grid container spacing={3} alignItems="stretch" sx={{ display: "flex", justifyContent:"center",}}>
        <Grid item xs={12} md={8} position="relative" sx={{ display: "flex" }}>
          <ImageBox>
            <Image src="../images/BestPriceBanner.jpg" alt="Best Price Banner" />
          
          </ImageBox>
        </Grid>
        <Grid item xs={12} md={3} sx={{ display: "flex" }}>
          <ContentBox>
          <Badge>Best Price</Badge>
            <Typography variant="h5" fontWeight={700} my={1} sx={{ color: "#ffffff" }}>
              Save up to
            </Typography>
            <Typography variant="h3" fontWeight={700} sx={{ color: "#ffffff" }}>
              $150
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ color: "#ffffff" }}>
              on selected laptop & tablets brands
            </Typography>
            <Typography variant="caption" display="block" mt={1} sx={{ color: "#ffffff" }}>
              Terms and conditions apply
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                color: "#f5f5f5",
                backgroundColor: "#6d1b7b",
                borderRadius: "20px",
                padding: "10px 40px",
              }}
            >
              Shop
            </Button>
          </ContentBox>
        </Grid>
      </Grid>
    </BestPriceContainer>
  );
};

export default BestPriceSection;
