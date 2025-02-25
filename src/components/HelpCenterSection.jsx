import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const HelpCenterSection = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden", px: 4, py: 8, backgroundColor: "#000",}}>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          overflow: "hidden",
          borderRadius: "12px",
        }}
      >
        {/* Left Text Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            color: "white",
            padding: { xs: "30px", md: "60px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Need Help? Check Out <br />
            Our Help Center
          </Typography>
          <Typography variant="body1" color="gray" mb={3}>
            I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6a0dad",
              padding: "12px 24px",
              borderRadius: "25px",
              fontWeight: 700,
              "&:hover": { backgroundColor: "#500a8b" },
            }}
          >
            Go to Help Center
          </Button>
        </Grid>

        {/* Right Section with Background Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            minHeight: "300px",
            backgroundImage: `url("../images/HelpCenter.jpg")`, // Replace with your actual image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
        />
      </Grid>
    </Box>
  );
};

export default HelpCenterSection;
