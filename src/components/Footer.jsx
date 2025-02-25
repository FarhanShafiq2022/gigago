import React from "react";
import { ReactSVG } from "react-svg";
import iconb from "../assets/icons/brand-chinaunionpay.svg";
import { Box, Grid, Typography, Link, IconButton, Divider } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
// Payment Icons (Use your own image URLs)
const paymentMethods = [
  "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg",
  "https://static.wixstatic.com/media/c837a6_52115f99af28419d95a951f226e32e2b~mv2.png/v1/fill/w_41,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-chinaunionpay%403x.png",
  "https://static.wixstatic.com/media/c837a6_9378fbd3ef8c470bb89aee12ecbd2209~mv2.png/v1/fill/w_41,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-jcb%403x.png",
  "https://static.wixstatic.com/media/84770f_70555dcb450a415d80322cb8d7e82a33~mv2.png/v1/fill/w_39,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Diners.png",
  "https://static.wixstatic.com/media/84770f_14f105815c3f47bf9001990706915501~mv2.png/v1/fill/w_41,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Discover.png",
  "https://static.wixstatic.com/media/84770f_8445424a46ca49f39359bf19d4a3e537~mv2.png/v1/fill/w_41,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PayPal.png",
];

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#fff", pt: 2, pb: 0, px: 0 }}sm={{px:2}}>
      <Grid container spacing={4} sx={{ maxWidth: "1200px", margin: "auto" }}>
        {/* Store Location */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Store Location
          </Typography>
          <Typography variant="body2" color="textSecondary">
            500 Terry Francine Street
            <br />
            San Francisco, CA 94158
            <br />
            info@mysite.com
            <br />
            123-456-7890
          </Typography>
          <Box sx={{ mt: 2 }}>
            <IconButton color="inherit"><Facebook /></IconButton>
            <IconButton color="inherit"><Instagram /></IconButton>
            <IconButton color="inherit"><Twitter /></IconButton>
            <IconButton color="inherit"><YouTube /></IconButton>
          </Box>
        </Grid>

        {/* Shop */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Shop
          </Typography>
          {["Shop All", "Computers", "Tablets", "Drones & Cameras", "Audio", "Mobile", "TV & Home Cinema", "Wearable Tech", "Sale"].map((item) => (
            <Typography key={item} variant="body2" color="textSecondary">
              <Link href="#" color="inherit" underline="hover">{item}</Link>
            </Typography>
          ))}
        </Grid>

        {/* Customer Support */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Customer Support
          </Typography>
          {["Contact Us", "Help Center", "About Us", "Careers"].map((item) => (
            <Typography key={item} variant="body2" color="textSecondary">
              <Link href="#" color="inherit" underline="hover">{item}</Link>
            </Typography>
          ))}
        </Grid>

        {/* Policy */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Policy
          </Typography>
          {["Shipping & Returns", "Terms & Conditions", "Payment Methods", "FAQ"].map((item) => (
            <Typography key={item} variant="body2" color="textSecondary">
              <Link href="#" color="inherit" underline="hover">{item}</Link>
            </Typography>
          ))}
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4 }} />

      {/* Payment Methods */}
      <Grid container direction="column" alignItems="center" sx={{ mb: 3 }}>
      <Grid item>
        <Typography variant="body2" color="textSecondary" mb={2}>
          We accept the following paying methods
        </Typography>
      </Grid>
      <Grid item>
        <Grid container justifyContent="center" spacing={2}>
          {paymentMethods.map((src, index) => (
            <Grid item key={index} xs={6} sm={4} md={2}>
              <img src={src} alt="Payment Method" style={{ height: 24, width: "100%", objectFit: "contain",}} />
            </Grid>
          ))}
        </Grid>
      </Grid>
</Grid>
      {/* Copyright */}
      <Typography variant="body2" color="#ffffff" textAlign="center" backgroundColor="#000000" p="5px">
        Copyright © 2025 by GIGAGO
      </Typography>
    </Box>
  );
};

export default Footer;
