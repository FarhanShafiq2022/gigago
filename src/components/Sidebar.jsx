import React, { useState } from "react";
import { Box, List, ListItem, ListItemText, Typography, Slider, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const categories = [
  "All Products", "Best Sellers", "Computers", "Drones & Cameras",
  "Headphones", "Home Page Best Sellers", "Home Page Sale",
  "Mobile", "Sale", "Speakers", "Tablets",
  "TV & Home Cinema", "Wearable Tech"
];

const Sidebar = ({ onCategorySelect = () => {}, onPriceChange }) => {
  const [priceRange, setPriceRange] = useState([70, 85]);
  const [isColorOpen, setIsColorOpen] = useState(false);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    if (onPriceChange) onPriceChange(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#000000",
        p: 2,
        borderRadius: "8px",
        boxShadow: 2,
      }}
    >
      <Typography variant="h6" sx={{color: "#ffffff", fontWeight: "bold", mb: 1 }}>
        Browse by
      </Typography>
      <hr></hr>
      {categories.map((category) => (
        <ListItem button key={category} onClick={() => onCategorySelect(category)}>
          <ListItemText primary={category} sx={{
            color: "#ffffff",
            fontSize: 14,
            cursor: "pointer",
            transition:"0.7s ease",
            "&:hover": {
              background: "#ffffff",
              color: "#000000",
              padding: "10px 20px",
              borderRadius: "15px",
            },
          }} />
        </ListItem>
      ))}

      {/* Price Filter */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, color: "#ffffff"}}>
        Filter by
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>Price</Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={50}
        max={1000}
        sx={{ color: "#ffffff" }}
      />
      <Typography variant="body2" sx={{color: "#ffffff",}}>${priceRange[0]} - ${priceRange[1]}</Typography>

      {/* Color Filter */}
      <ListItem button onClick={() => setIsColorOpen(!isColorOpen)}>
        <ListItemText sx={{color: "#ffffff",}} />
        <IconButton>{isColorOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}</IconButton>
      </ListItem>
    </Box>
  );
};

export default Sidebar;
