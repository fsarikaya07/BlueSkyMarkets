import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import HeroOne from "../components/hero/HeroOne";
import ServiceThree from "../components/services/ServiceThree";
import FeatureFour from "../components/features/FeatureFour";
import BrandOne from "../components/brand/BrandOne";
import FooterOne from "../common/footer/FooterOne";
import Currency from "../components/Currency";

const HomeDefault = () => {
  return (
    <>
      <HeaderOne />
      <HeroOne />
      <ServiceThree />

      <FeatureFour />
      <Currency />
      <BrandOne />

      <FooterOne />
    </>
  );
};

export default HomeDefault;
