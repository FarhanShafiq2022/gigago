import React from 'react';

// BestSellers.js
import ProductSlider from '../components/ProductSlider';

const SaleSectionData = [
  {
    title: "JP - Spec Tablet 10.4\" Wi-Fi 32GB",
    image: "../images/SpaceTable.png",
    originalPrice: "$685.09",
    discountedPrice: "$70.00",
  },
  {
    title: "Ocean Pro 11 - 12.3\" Touch Screen",
    image: "../images/oceanpro.png",
    originalPrice: "$685.09",
    discountedPrice: "$70.00",
  },
  {
    title: "Fiberox Inspeir Fitness Tracker With Heart Rate Tracking",
    image: "../images/FitbootInspireFitnessTracker.png",
    originalPrice: "$685.09",
    discountedPrice: "$70.00",
  },
  {
    title: "Smartphone 2 Pixel Max 128GB Unlocked",
    image: "../images/SmartphoneZPixelMax128GBUnlocked.png",
    originalPrice: "$685.09",
    discountedPrice: "$70.00",
  },
  {
    title: "45\" Class Nano LED 4K UHD Smart TV",
    image: "../images/65Class-Nano-LED-4K-SmartTV.png",
    originalPrice: "$685.09",
    discountedPrice: "$70.00",
  },
];

const SaleSection = () => (
  <ProductSlider
    products={SaleSectionData}
    title="Sale"
    buttonText="View All"
  />
);

export default SaleSection;