import React from "react";
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";

import FooterOne from "../common/footer/FooterOne";
import PlatformContent from "../components/single-portfolio/PlatformContetn";

const Platform = () => {
  return (
    <>
      <HeaderThree />
      <Breadcrumb heading="Platform" currentPage="Platform" />
      <PlatformContent />

      <FooterOne />
    </>
  );
};

export default Platform;
