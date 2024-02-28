import React from "react";
import { Link } from "react-router-dom";

export default class FooterOne extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <footer className="footer-one-sec">
          <div
            className="footer-one__pattern"
            style={{
              backgroundImage:
                "url(" +
                publicUrl +
                "assets/images/pattern/footer-v1-pattern.png)",
            }}
          ></div>
          <div className="footer-one__top">
            <div
              className="footer-one__top-img"
              style={{
                backgroundImage:
                  "url(" +
                  publicUrl +
                  "assets/images/resources/footer-v1-img3.png)",
              }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="footer-one__top-inner">
                    <div className="row">
                      <div
                        className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="footer-widget__column footer-widget__about">
                          <div className="footer-widget__about-logo">
                            <Link to="/">
                              <img
                                src={"assets/images/bluesky/blueskylogo189.png"}
                                alt="Logo"
                              />
                            </Link>
                          </div>

                          <p className="footer-widget__about-text">
                            Featuring the MetaTrader4 and MetaTrader5 trading
                            platforms, we provide our customers with a 5/24
                            service with a leverage ratio of 1:200.
                          </p>

                          <div className="footer-widget__about-social-link">
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

                      <div
                        className="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="footer-widget__column footer-widget__services">
                          <h2 className="footer-widget__title">Our Services</h2>
                          <ul className="footer-widget__services-list">
                            <li className="footer-widget__services-list-item">
                              <Link to="/about">About Company</Link>
                            </li>
                            <li className="footer-widget__services-list-item">
                              <Link to="/account">Account</Link>
                            </li>
                            <li className="footer-widget__services-list-item">
                              <Link to="/contant">Comapny News</Link>
                            </li>
                            <li className="footer-widget__services-list-item">
                              <Link to="/open-account">Company Project</Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        className="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <div className="footer-widget__column footer-widget__explore">
                          <h2 className="footer-widget__title">Our Explore</h2>
                          <ul className="footer-widget__explore-list">
                            <li className="footer-widget__explore-list-item">
                              <Link to="/">Home</Link>
                            </li>
                            <li className="footer-widget__explore-list-item">
                              <Link to="/platform">Platforms</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="footer-one__bottom clearfix">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="footer-one__bottom-inner">
                    <div className="footer-one__bottom-text">
                      <p>
                        Copyright &copy;2022. All rights reserved to{" "}
                        <Link to="/">Const</Link>
                      </p>
                    </div>

                    <div className="footer-one__bottom-list">
                      <ul>
                        <li>
                          <Link to="/about-one">Terms & Condition </Link>
                        </li>
                        <li>
                          <Link to="/about-one"> Services</Link>
                        </li>
                        <li>
                          <Link to="/about-one">Careers</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </footer>
      </>
    );
  }
}
