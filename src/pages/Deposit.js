import React from "react";
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";

import BrandOne from "../components/brand/BrandOne";
import FooterOne from "../common/footer/FooterOne";
import AccDetailContent from "../components/single-portfolio/AccDetailContent";
import DepositContent from "../components/single-portfolio/DepositContent";

const Deposit = () => {
  return (
    <>
      <HeaderThree />
      <Breadcrumb
        heading="Money Deposit/Withdrawal"
        currentPage="Money Deposit/Withdrawal"
      />
      <DepositContent />

      <FooterOne />
    </>
  );
};

export default Deposit;
