import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import WorkPerformanceOne from '../components/work-performance/WorkPerformanceOne';

import FooterOne from '../common/footer/FooterOne';

const AboutOne = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="About Us"
                currentPage="About Us" 
            />
            <WorkPerformanceOne />
            
            <FooterOne />
        </>
    )
}

export default AboutOne;