import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";

import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';
import AccDetailContent from '../components/single-portfolio/AccDetailContent';

const Account = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Account"
                currentPage="Account" 
            />
            <AccDetailContent />
            
            <FooterOne />
        </>
    )
}

export default Account;