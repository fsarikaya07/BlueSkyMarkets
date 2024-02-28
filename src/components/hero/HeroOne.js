import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class HeroOne extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".slider-carousel").length) {
      $(".slider-carousel").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        loop: true,
        margin: 0,
        nav: false,
        singleItem: true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 6000,
        navText: [
          '<span class="icon-right-arrow"></span>',
          '<span class="icon-right-arrow"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1024: {
            items: 1,
          },
        },
      });
    }
  }
  render() {
    return (
      <>
        <section className="slider-one-sec style3">
          <div className="slider-carousel owl-carousel owl-theme" style={{height:"800px"}}>
            {/* Start Slider One Single */}
            <div className="slider-one__single">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    'url("assets/images/bluesky/slider2.jpg")',
                    
                }}
              ></div>
              <div className="container">
                <div className="row clearfix">
                  <div className="col-xl-12 ">
                    <div className="slider-one__single-content">
                      <h3>BLUESKY FOREX</h3>
                      <h2>
                        24/5 Trading Service with <br />
                        MetaTrader4 and <br /> MetaTrader5 Platforms
                      </h2>
                      <p>
                        Featuring the MetaTrader4 and MetaTrader5 trading
                        platforms, <br /> we provide our customers with a 5/24
                        service.
                      </p>
                      <div className="btn-box">
                        <Link
                          to={process.env.PUBLIC_URL + `/`}
                          className="thm-btn"
                          data-text="Read More +"
                        >
                          Read More +
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Slider One Single */}

            {/* Start Slider One Single */}
            <div className="slider-one__single">
              <div
                className="image-layer"
                style={{
                  backgroundImage: 'url("assets/images/bluesky/slider3.jpg")',
                }}
              ></div>
              <div className="container pl-0">
                <div className="row clearfix">
                  <div className="col-xl-12">
                    <div className="slider-one__single-content text-center">
                      <h3>BLUESKY FOREX</h3>
                      <h2>
                        A Trusted Brokerage <br /> Since 2017
                      </h2>
                      <p>
                        Blue Sky Markets team is here to provide you a service
                        above world standards.
                        <br /> With more than 140 products and several account
                        options tailored for each investor's needs, we offer
                        satisfaction guarantee to all our
                        <br />
                        investors who want to take part in Forex markets.
                      </p>
                      <div className="btn-box">
                        <Link
                          to={process.env.PUBLIC_URL + `/`}
                          className="thm-btn"
                          data-text="Read More +"
                        >
                          Read More +
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Slider One Single */}

            {/* Start Slider One Single */}
            <div className="slider-one__single">
              <div
                className="image-layer"
                style={{
                  backgroundImage: 'url("assets/images/bluesky/Bluesky.jpg")',
                }}
              ></div>
              <div className="container">
                <div className="row clearfix">
                  <div className="col-xl-12">
                    <div className="slider-one__single-content">
                      <h3>BLUESKY FOREX</h3>
                      <h2>
                        Trade a Diverse Range of Assets with <br />
                        Enhanced Leverage and Seamless Transactions
                      </h2>
                      <p>
                        CFDs on Forex, Commodities, Bonds, Metals, Energies,
                        Shares, Indices and more with 1:200 leverage,
                        <br /> ultra-fast execution, quick deposits &
                        withdrawals and swap free accounts.
                      </p>
                      <div className="btn-box">
                        <Link
                          to={process.env.PUBLIC_URL + `/`}
                          className="thm-btn"
                          data-text="Read More +"
                        >
                          Read More +
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Slider One Single */}
          </div>
        </section>
      </>
    );
  }
}
