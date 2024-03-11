import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ContactMap from "../components/contact/ContactMap";
import ContactForm from "../components/contact/ContactForm";
import BrandOne from "../components/brand/BrandOne";
import FooterOne from "../common/footer/FooterOne";
import FileForm from '../components/contact/FileForm';
import MoneyForm from '../components/contact/MoneyForm';

const MoneyWithdraw = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Money Withdraw"
                currentPage="Money Withdraw" 
            />
          
            <MoneyForm/>
            {/* <BrandOne /> */}
            <FooterOne />
        </>
    )
}

export default MoneyWithdraw;