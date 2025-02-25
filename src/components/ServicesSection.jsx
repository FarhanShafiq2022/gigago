import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import AccessTimeIcon from "@mui/icons-material/AccessTime";


const services = [
  {
    icon: <DeliveryDiningIcon sx={{ fontSize: 50, color: "#000000" }} />,
    title: <span style={{ fontSize: "12px", fontWeight: "bold" }}>Curb-side pickup</span>,
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 50, color: "#000000" }} />,
    title: <span style={{ fontSize: "12px", fontWeight: "bold" }}>Free shipping on orders over $50</span>,
  },
  {
    icon: <PriceCheckIcon sx={{ fontSize: 50, color: "#000000" }} />,
    title: <span style={{ fontSize: "12px", fontWeight: "bold" }}>Low prices guaranteed</span>,
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 50, color: "#000000" }} />,
    title: <span style={{ fontSize: "12px", fontWeight: "bold" }}>Available to you 24/7</span>,
  },
  
];

const ServiceCard = styled(Card)({
  
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  boxShadow: "none",
  backgroundColor: "#fff",
  padding: "20px 10px",
  
});

const ServicesSection = () => {
  return (
    <Grid container spacing={2} sx={{ backgroundColor: "#f5f5f5", padding: "20px" }}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <ServiceCard>
            <CardContent>
              {service.icon}
              <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 1 }}>
                {service.title}
              </Typography>
            </CardContent>
          </ServiceCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServicesSection;
