import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";

const brands = [
  { name: "ZODIAC" },
  { name: "ZORO" },
  { name: "PJK" },
  { name: "GXL" },
  { name: "HORIZON" },
];

const BrandSection = () => {
  return (
    <Box sx={{ textAlign: "center", padding: "3rem 1rem", backgroundColor: "#ffffff",}}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
        Brands
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {brands.map((brand, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 100,
                border: "1px solid rgba(0, 0, 0, 0.3)",
                p: 2,
                // borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "gray", fontWeight: "bold" }}
              >
                {brand.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BrandSection;
