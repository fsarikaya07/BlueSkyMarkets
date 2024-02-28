import React from "react";
import { Link } from "react-router-dom";

export default class FeatureFour extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        {/* Start Feature Four */}
        <section className="feature-four">
          <div className="container">
            <div className="sec-title text-center">
              <div className="sec-title__tagline">
                <span className="left"></span>
                <h6>Money Deposit/Withdrawal</h6>{" "}
                <span className="right"></span>
              </div>
              {/* <h2 className="sec-title__title">Our Best Features</h2> */}
            </div>
            <div className="row">
              {/* Start Feature Four Single */}
              <div className="col-xl-4">
                <div className="feature-four__single">
                  <div className="feature-four__single-img">
                    <img src="assets/images/bluesky/banktrans.jpg" alt="#" />
                  </div>
                </div>
              </div>
              {/* End Feature Four Single */}

              {/* Start Feature Four Single */}
              <div className="col-xl-4">
                <div className="feature-four__single style2 text-center">
                  <div className="feature-four__single-icon">
                    <span className="icon-interior-design-1"></span>
                  </div>
                  <div className="feature-four__single-content">
                    <h2>
                      <Link to={process.env.PUBLIC_URL + `/services`}>
                        Bank Transfer
                      </Link>
                    </h2>
                    <p>
                      As Blue Sky Markets, we offer you various deposit and
                      withdrawal options on your accounts. The first is bank
                      transfer....
                    </p>
                  </div>
                </div>
              </div>
              {/* End Feature Four Single */}

              {/* Start Feature Four Single */}
              <div className="col-xl-4">
                <div className="feature-four__single">
                  <div className="feature-four__single-img">
                  <img src={"assets/images/bluesky/credcard.jpg"} alt="#" />
                  </div>
                </div>
              </div>
              {/* End Feature Four Single */}

              {/* Start Feature Four Single */}
              <div className="col-xl-4">
                <div className="feature-four__single style2 text-center">
                  <div className="feature-four__single-icon">
                    <span className="icon-crane"></span>
                  </div>
                  <div className="feature-four__single-content">
                    <h2>
                      <Link to={process.env.PUBLIC_URL + `/services`}>
                        Credit Card
                      </Link>
                    </h2>
                    <p>
                      Our second payment method is credit card. Payments made by
                      credit card, which is one of the most preferred and
                      trusted methods of Forex users worldwide, are both easy
                      and fast...{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* End Feature Four Single */}

              {/* Start Feature Four Single */}
              <div className="col-xl-4">
                <div className="feature-four__single">
                  <div className="feature-four__single-img">
                  <img src={"assets/images/bluesky/e-wallet.jpg"} alt="#" />
                  </div>
                </div>
              </div>
              {/* End Feature Four Single */}

              {/* Start Feature Four Single */}
              <div className="col-xl-4">
                <div className="feature-four__single style2 text-center">
                  <div className="feature-four__single-icon">
                    <span className="icon-painting"></span>
                  </div>
                  <div className="feature-four__single-content">
                    <h2>
                      <Link to={ `#`}>
                        E-Wallet
                      </Link>
                    </h2>
                    <p>
                      E-wallet, also known as “digital wallet”, is the name
                      given to online applications that you can use in processes
                      such as deposit and management in your online
                      transactions.{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* End Feature Four Single */}
            </div>
          </div>
        </section>
        {/* End Feature Four */}
      </>
    );
  }
}
