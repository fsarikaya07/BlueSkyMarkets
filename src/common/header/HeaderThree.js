import React from "react";

import LogoWhite from "./LogoWhite";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";

const HeaderThree = () => {
  return (
    <>
      <header className="main-header main-header-one clearfix">
        <div className="main-header-one__wrapper">
          <div className="main-header-one__top">
            <div className="container-fluid">
              <div className="main-header-one__top-inner">
                <div className="main-header-one__left">
                  <LogoWhite />
                </div>

                <div className="main-header-one__middle">
                  <ul>
                    <li>
                      <div className="icon">
                        <span className="icon-pin"></span>
                      </div>

                      <div className="text">
                        <span>Our Location</span>
                        <p>P.O. Box 1570, Kingstown </p>
                      </div>
                    </li>

                    <li>
                      <div className="icon">
                        <span className="icon-email"></span>
                      </div>

                      <div className="text">
                        <span>Online Support</span>
                        <p className="email">
                          <a href="mailto:info@blueskymarkets.me">
                            info@blueskymarkets.me
                          </a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="icon">
                        <span className="icon-phone-call"></span>
                      </div>

                      <div className="text">
                        <span>Free Contact</span>
                        <p className="number">
                          <a href="tel:02127000953">0212 700 09 53 (TR)</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="main-header-one__right"></div>
              </div>
            </div>
          </div>

          <div className="main-header-one__bottom">
            <div className="container-fluid">
              <div className="main-header-one__bottom-inner">
                <div className="main-header-one__bottom-left">
                  <nav className="main-menu main-menu--1">
                    <div className="main-menu__inner">
                      <MobileMenu />
                      <div className="stricky-one-logo">
                        <LogoWhite />
                      </div>
                      <Nav />
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderThree;
