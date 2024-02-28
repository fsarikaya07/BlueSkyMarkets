import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import FooterOne from "../common/footer/FooterOne";


const ContactPage = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Contact Us"
                currentPage="Contact Us" 
            />
          
            <ContactForm />
            
            <FooterOne />
        </>
    )
}

export default ContactPage;