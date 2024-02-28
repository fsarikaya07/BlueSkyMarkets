import React from "react";

import LogoBlack from "./LogoBlack";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import LogoBox from "./LogoBox";

export default class HeaderOne extends React.Component {
  render() {
    return (
      <>
        <header className="main-header main-header-three clearfix">
          <div className="main-header-three__wrapper">
            <div className="main-header-three__top clearfix">
              <div className="container">
                <div className="main-header-three__top-inner">
                  <div className="left">{/* <NiceSelect /> */}</div>

                  <div className="right">
                    <div className="title">
                      <p>Get Social With Us!</p>
                    </div>

                    <div className="footer-widget__about-social-link iconSo">
                      <ul>
                        <li>
                          <a href="https://twitter.com/BlueSkyForex"  target="_blank" rel="noopener noreferrer">
                            <span className="first icon-twitter"></span>
                            <span className="second icon-twitter"></span>
                          </a>
                        </li>

                        <li>
                          <a href="https://www.instagram.com/bluesky.markets/"  target="_blank" rel="noopener noreferrer">
                            <span className="first icon-linkedin"></span>
                            <span className="second icon-linkedin"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="main-header-three__middle">
              <div className="container">
                <div className="main-header-three__middle-inner">
                  <LogoBox />

                  <div className="contact-info">
                    <ul>
                      <li>
                        <div className="icon-box">
                          <span className="icon-pin"></span>
                        </div>
                        <div className="text-box">
                          <h3>Our Location</h3>
                          <p>P.O. Box 1570, Kingstown</p>
                        </div>
                      </li>

                      <li>
                        <div className="icon-box">
                          <span className="icon-email"></span>
                        </div>
                        <div className="text-box">
                          <h3>Online Support</h3>
                          <p className="email">
                            <a
                              href="mailto: info@blueskymarkets.me
"
                            >
                              info@blueskymarkets.me
                            </a>
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="icon-box">
                          <span className="icon-phone-call"></span>
                        </div>
                        <div className="text-box">
                          <h3>Free Contact</h3>
                          <p className="number">
                            <a href="tel:02127000953"> 0212 700 09 53 (TR)</a>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-header-three__bottom">
              <div className="container">
                <div className="main-header-three__bottom-inner">
                  <div className="main-header-one__bottom-left">
                    <nav className="main-menu main-menu--1">
                      <div className="main-menu__inner">
                        <MobileMenu />
                        <div className="stricky-one-logo">
                          <LogoBlack />
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

        <div className="stricky-header stricked-menu main-menu">
          <div className="sticky-header__content"></div>
        </div>
      </>
    );
  }
}
