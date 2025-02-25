import React, { useState } from "react";
import { FaUser, FaHeart, FaShoppingCart, FaSearch, FaBox, FaBars } from "react-icons/fa";
import {  AppBar,
  Toolbar, IconButton, Typography, Button, Drawer, List, ListItem,  ListItemText, Box,
  TextField, Badge, } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
// import React, { useState } from "react";
import '../components/Navbar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';




const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    'Shop All',
    'Computers',
    'Tablets',
    'Drones & Cameras',
    'Audio',
    'Mobile',
    'T.V & Home Cinema',
    'Wearable Tech',
    'Sale',
  ];


  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };
  return (
    <div>
    {/* Top Banner */}
  <AppBar position="static" sx={{ backgroundColor: "black", color: "white", py: 1,}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        <Typography variant="body2">Free Shipping for orders over $50</Typography>
        {/* Hide top menu in mobile */}
        <Box sx={{ display: { xs: "none", md: "flex" },alignItems:"center" ,gap: 2 }}>
          <Button component={NavLink} to="/about" color="inherit" sx={{ textTransform: "none" }}>About</Button>
          <Button component={NavLink} to="/contact" color="inherit" sx={{ textTransform: "none" }}>Contact</Button>
          <Button component={NavLink} to="/help" color="inherit" sx={{ textTransform: "none" }}>Help Center</Button>
          <Typography variant="body2">Call Us 123-456-7890</Typography>
        </Box>
      </Toolbar>
    </AppBar>

    {/* Main Navbar */}
    <AppBar position="static" color="default" sx={{ boxShadow: 1, py: 1 }}>
      <Toolbar sx={{ display: "flex",flexDirection: "row", justifyContent: "space-between", alignItems: "center", px: { xs: 2, md: 4 } }}>
        {/* Logo on the left */}
        <Typography variant="h4" component={NavLink} to="/" sx={{ textDecoration: "none", color: "black", fontWeight: "bold", fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}>
          GIGAGO
        </Typography>

        {/* Search Bar (Hidden on mobile) */}
        <Box
  sx={{
    display: { xs: "none", sm: "flex" },
    alignItems: "center",
    maxWidth: { sm: 300, md: 500 },
    width: "100%",
    position: "relative",
    mx: 2,
  }}
>
  <TextField
    fullWidth
    variant="outlined"
    size="small"
    placeholder="Search..."
    sx={{
      backgroundColor: "#f8f8f8",
      borderRadius: "50px",
      paddingRight: 6,
      paddingLeft: "30", // Add padding on the left for better alignment of text
      "& .MuiOutlinedInput-root": {
        borderRadius: "50px",
      },
      "& .MuiInputBase-input": {
        padding: "10px", // Adjusting text padding for better alignment
      },
    }}
  />
  <IconButton
    className="mysearchbar1"
    sx={{
      position: "absolute",
      right: "50px", // Reduced the gap between the icon and text field
      top: "50%",
      fontSize: "20px",
      transform: "translateY(-50%)",
      color: "#000000", // Icon color (blue for better contrast)
      "&:hover": {
        backgroundColor: "#e3f2fd", // Subtle hover effect
      },
    }}
  >
    <FaSearch />
  </IconButton>
</Box>  

        {/* Hamburger Menu (Right in mobile) */}
        <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)} sx={{ display: { xs: "block", md: "none" } }}>
          <MenuIcon />
        </IconButton>

        {/* User Options (Hidden on mobile) */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
          <Button component={NavLink} to="/login" sx={{ textTransform: "none", color: "black", display: "flex", alignItems: "center", gap: 1 }}>
            <FaUser /> Log In
          </Button>
          <IconButton component={NavLink} to="/wishlist" color="inherit">
            <FaHeart />
          </IconButton>
          <IconButton component={NavLink} to="/cart" color="inherit">
            <Badge badgeContent={0} color="error">
              <FaShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
      {/* Categories Menu */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 1, px: 4, display: "flex", justifyContent: "left", gap: 2,
        "@media (max-width: 900px)": { // Adjust for tablet screens
      display: "none",
    },
       }}>
        {[
          { name: "Shop All", path: "/shop" },
          { name: "Computers", path: "/computers" },
          { name: "Tablets", path: "/tablets" },
          { name: "Drones & Cameras", path: "/drones" },
          { name: "Audio", path: "/audio" },
          { name: "Mobile", path: "/mobile" },
          { name: "T.V & Home Cinema", path: "/tv-home-cinema" },
          { name: "Wearable Tech", path: "/wearable-tech" },
          { name: "Sale", path: "/sale" },
        ].map((category, index) => (
          <Button
            key={index}
            component={NavLink}
            to={category.path}
            sx={{
              textTransform: "none",
              color: "black",
              fontSize: "0.9rem",
              "&.active": { fontWeight: "bold", borderBottom: "2px solid #1976d2" }, // Active link styling
            }}
          >
            {category.name}
          </Button>
        ))}
      </Box>
    </AppBar>

    {/* Mobile Drawer Menu */}
    <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 250, p: 2 }}>
        <IconButton onClick={toggleDrawer(false)} sx={{ textAlign: "right" }}>
          <CloseIcon />
        </IconButton>
    <Box sx={{ display: {  sm: "flex" }, alignItems: "center", maxWidth: { sm: 300, md: 500 }, width: "100%", position: "relative", mx: 2 }}>
          <TextField fullWidth variant="outlined" size="small" placeholder="Search..." sx={{
      width: "80%",
      backgroundColor: "#f8f8f8",
      borderRadius: "50px",
     // Add padding on the left for better alignment of text
      "& .MuiOutlinedInput-root": {
        borderRadius: "50px",
      },
      "& .MuiInputBase-input": {
        padding: "10px", // Adjusting text padding for better alignment
      },
    }} />
          <IconButton sx={{
      position: "absolute",
      right: "50px", // Reduced the gap between the icon and text field
      top: "50%",
      fontSize: "20px",
      transform: "translateY(-50%)",
      color: "#000000", // Icon color (blue for better contrast)
      "&:hover": {
        backgroundColor: "#e3f2fd", // Subtle hover effect
      },
    }}>
            <FaSearch />
          </IconButton>
        </Box>
        <List>
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Help Center", path: "/help" },
            { name: "Log In", path: "/login", icon: <FaUser /> },
          ].map((item, index) => (
            <ListItem button component={NavLink} to={item.path} key={index} onClick={toggleDrawer(false)}>
              {item.icon && item.icon}
              <ListItemText primary={item.name} sx={{ ml: item.icon ? 1 : 0 }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  </div>
  );
};

export default Navbar;
