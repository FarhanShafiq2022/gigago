import React from "react";
import { Container, Box, Typography, TextField, Button, Checkbox, FormControlLabel } from "@mui/material";

const Newsletter = () => {
  return (
    <Box sx={{
      backgroundColor: "#6A0DAD",
      py: 5,
      m: 4,
      borderRadius: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "300px",
    }}>
      <Container maxWidth="sm" sx={{ textAlign: "center", color: "#fff" }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Newsletter
        </Typography>
        <Typography variant="body1" mb={3}>
          Sign up to receive updates on new arrivals and special offers
        </Typography>
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            type="email"
            label="Email"
            fullWidth
            required
            sx={{
              backgroundColor: "#fff",
              borderRadius: "50px",
              outline: "0px",
              border: "0px",
            }}
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: "#fff"}} />}
            label={<Typography variant="body2">Yes, subscribe me to your newsletter.</Typography>}
          />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "10px 30px",
              transition: "0.5s ease",
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#000000",
                borderRadius: "10px 30px 30px 30px",
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter;
