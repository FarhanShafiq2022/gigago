import React from "react";
import "../pages/Home.css";
import HeroSection from "../components/slider";
import EcommerceBanner from "../components/EcommerceBanner";
import ServicesSection from "../components/ServicesSection"; 
import CategorySection from "../components/CategorySection";
import BestPriceSection from "../components/BestPriceSection";
import TodaySpecialBanner from "../components/TodaySpecialbanner";
import SaleSection from "../components/SaleSection";
import BestSellers from "../components/BestSellers";
import BrandSection from "../components/BrandSection";
import Newsletter from "../components/NewsletterSection";
import HelpCenterSection from "../components/HelpCenterSection";

const HomePage = () =>{
    return(
       <>
        <HeroSection />
        <EcommerceBanner />
        <ServicesSection />
        <BestSellers />
        <CategorySection />
        <BestPriceSection /> 
        <SaleSection />
        <TodaySpecialBanner />
        <BrandSection />
        <Newsletter />
        <HelpCenterSection />
       </>
    )
}

export default HomePage