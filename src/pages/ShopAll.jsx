import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const products = [
  { id: 1, name: "JP - Spec Tablet 10.4\" Wi-Fi 32GB", img: "../images/SpaceTable.png", originalPrice: 685.09, price: 50.0, sale: true, category: "Tablets"  },
  { id: 2, name: "Ocean Pro 11 - 12.3\" Touch Screen", img: "../images/oceanpro.png", originalPrice: 685.09, price: 50.0, sale: true, category: "Tablets" },
  { id: 3, name: "Shell 50\" Class LED 4K UHD Smart TV", img: "../images/Shel50Class4KUHDSmartTV.png", price: 585.0, sale: false, category: "TV & Home Cinema" },
  { id: 4, name: "Fiberox Inspeir Fitness Tracker", img: "../images/FitbootInspireFitnessTracker.png", originalPrice: 685.09, price: 70.0, sale: true,category: "Sale", category: "Wearable Tech"  },
  { id: 5, name: "Smartphone 2 Pixel Max 128GB", img: "../images/SmartphoneZPixelMax128GBUnlocked.png", originalPrice: 685.09, price: 70.0, sale: true, category: "Mobile",category: "Mobile" },
  { id: 6, name: "45\" Class Nano LED 4K UHD Smart TV", img: "../images/65Class-Nano-LED-4K-SmartTV.png", originalPrice: 685.09, price: 70.0, sale: true, category: "Sale",category: "TV & Home Cinema" },
  { id:7, name: "45\" Class Nano LED 4K UHD Smart TV", img: "../images/65Class-Nano-LED-4K-SmartTV.png", originalPrice: 685.09, price: 70.0, sale: true, category: "Sale",category: "TV & Home Cinema"  },
  { id: 8, name: "45\" Class Nano LED 4K UHD Smart TV", img: "../images/65Class-Nano-LED-4K-SmartTV.png", originalPrice: 685.09, price: 70.0, sale: true, category: "Sale",category: "TV & Home Cinema"  },
  { id: 9, name: "45\" Class Nano LED 4K UHD Smart TV", img: "../images/65Class-Nano-LED-4K-SmartTV.png", originalPrice: 685.09, price: 70.0, sale: true, category: "Sale",category: "TV & Home Cinema" },
  { id: 10, name: "45\" Class Nano LED 4K UHD Smart TV", img: "../images/65Class-Nano-LED-4K-SmartTV.png", originalPrice: 685.09, price: 70.0, sale: true,category: "TV & Home Cinema",category: "Sale"  },
  { id: 11, name: "45\" Class Nano LED 4K UHD Smart TV", img: "../images/65Class-Nano-LED-4K-SmartTV.png", originalPrice: 685.09, price: 70.0, sale: true,category: "TV & Home Cinema",category: "Sale"},
  { id: 12, name: "45\" Class Nano LED 4K UHD Smart TV", img: "../images/65Class-Nano-LED-4K-SmartTV.png", originalPrice: 685.09, price: 70.0,category: "TV & Home Cinema"},
  { id: 13, name: "45\" Class Nano LED 4K UHD Smart TV", img: "../images/65Class-Nano-LED-4K-SmartTV.png", originalPrice: 685.09, price: 70.0, sale: true,category: "Sale" },
  { id: 14, name: "45\" Class Nano LED 4K UHD Smart TV", img: "../images/65Class-Nano-LED-4K-SmartTV.png", originalPrice: 685.09, price: 70.0, sale: true ,category: "Sale",category: "TV & Home Cinema"},
  { id: 15, name: "45\" Class Nano LED 4K UHD Smart TV", img: "../images/65Class-Nano-LED-4K-SmartTV.png", originalPrice: 685.09, price: 70.0,category: "TV & Home Cinema"},
  { id: 16, name: "45\" Class Nano LED 4K UHD Smart TV", img: "../images/65Class-Nano-LED-4K-SmartTV.png", originalPrice: 685.09, price: 70.0, sale: true,category: "Sale" },
  { id: 17, name: "45\" Class Nano LED 4K UHD Smart TV", img: "../images/65Class-Nano-LED-4K-SmartTV.png", originalPrice: 685.09, price: 70.0, category: "Sale"},


];

const ITEMS_PER_PAGE = 16;

const ShopAll = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [priceRange, setPriceRange] = useState([50, 800]);
  const [sortBy, setSortBy] = useState("Recommended");
  const [page, setPage] = useState(1);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setPage(1);
  };

  const handleSortChange = (event) => setSortBy(event.target.value);
  const handlePriceChange = (newRange) => setPriceRange(newRange);
  const handlePageChange = (event, value) => setPage(value);

  // **Apply Filtering & Sorting**
  const filteredProducts = products.filter(
    (product) =>
    (selectedCategory === "All Products" || product.category === selectedCategory) && product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price;
    if (sortBy === "Price: High to Low") return b.price - a.price;
    if (sortBy === "Name A-Z") return a.name.localeCompare(b.name);
    if (sortBy === "Name Z-A") return b.name.localeCompare(a.name);
    return 0;
  });

  const paginatedProducts = sortedProducts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <Container sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Sidebar onCategorySelect={handleCategorySelect} onPriceChange={handlePriceChange} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="h4" sx={{ m: "20px 0", textAlign: "center", fontWeight: "bold" }}>
            {selectedCategory}
          </Typography>
          <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
            <Typography variant="body1">Showing {filteredProducts.length} products</Typography>
            <FormControl sx={{ minWidth: { xs: "100%", sm: 250 } }}>
              <InputLabel>Sort by</InputLabel>
              <Select value={sortBy} onChange={handleSortChange} variant="outlined">
                <MenuItem value="Recommended">Recommended</MenuItem>
                <MenuItem value="Price: Low to High">Price: Low to High</MenuItem>
                <MenuItem value="Price: High to Low">Price: High to Low</MenuItem>
                <MenuItem value="Name A-Z">Name A-Z</MenuItem>
                <MenuItem value="Name Z-A">Name Z-A</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Grid container spacing={3} justifyContent="center">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      borderTopLeftRadius: "15px",
                      borderBottomRightRadius: "15px",
                      boxShadow: 3,
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <CardMedia
                      component="img"
                      image={product.img}
                      alt={product.name}
                      sx={{
                        width: "100%",
                        height: { xs: 200, sm: 250, lg: 300 },
                        objectFit: "cover",
                        transition: "0.3s ease-in-out",
                        filter: hoveredProduct === product.id ? "blur(4px)" : "none",
                      }}
                    />
                    {hoveredProduct === product.id && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          display: "flex",
                          gap: 2,
                        }}
                      >
                        <IconButton sx={{ bgcolor: "white" }}>
                          <ShoppingCartIcon color="primary" />
                        </IconButton>
                        <IconButton sx={{ bgcolor: "white" }}>
                          <FavoriteBorderIcon color="error" />
                        </IconButton>
                      </Box>
                    )}
                    <CardContent sx={{ textAlign: "center" }}>
                      {product.sale && (
                        <Chip label="SALE"  sx={{ position: "absolute", top: "0px", left: "0px", background:"#000000", padding: "10px 15px", color:"#ffffff", fontWeight:"bold", borderRadius: "0", }} />
                      )}
                      <Typography variant="body1" fontWeight="bold">{product.name}</Typography>
                      <Typography variant="h6" color="#000000" fontWeight="bold">${product.price.toFixed(2)}</Typography>
                      {product.originalPrice && (
                        <Typography variant="body2" sx={{ textDecoration: "line-through", color: "gray" }}>
                          ${product.originalPrice.toFixed(2)}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="h6" color="error" sx={{ textAlign: "center", width: "100%" }}>
                No products found in this price range.
              </Typography>
            )}
          </Grid>
          <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
            <Pagination
              count={Math.ceil(sortedProducts.length / ITEMS_PER_PAGE)}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShopAll;
