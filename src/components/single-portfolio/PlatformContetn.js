import React from "react";


export default class PlatformContent extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".video-popup").length) {
      $(".video-popup").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false,
      });
    }
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="protfolio-details">
          <div className="container">
            <div className="row ">
              {/* Start Protfolio Details Content */}
              <div className="col-xl-10 col-lg-8 ">
                <div className="protfolio-details__content">
                  <div className="protfolio-details__content-img1">
                    <img
                      src={
                        publicUrl + "assets/images/bluesky/platform-img1.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <h3 className="blog-details__title">
                    What is a Demo Account?
                  </h3>
                  <div className="protfolio-details__content-text1">
                    <p>
                      Even if you do not have any investment or trading
                      experience, you too, may want to step into Forex, the
                      world’s largest market with a daily transaction volume of
                      over 5 trillion dollars, and get your own share of it.
                      With a demo account, we offer you the opportunity to test
                      yourself beforehand so that you do not risk your capital
                      while evaluating your strategies and measuring the impact
                      of your predictions..{" "}
                    </p>
                  </div>

                  <div className="protfolio-details__content-text2">
                    <p>
                      Demo Account can also be seen as a trial account. Although
                      it works just like a real account does, you can see the
                      results of your transactions and try your strategies
                      without risking your money as you will not be actually
                      funding it. There is no real money transactions in a demo
                      account. Trading is done only as a trial and you can see
                      possible scenarios.{" "}
                    </p>
                  </div>

                  <div className="protfolio-details__content-img2">
                    <img
                      src={
                        publicUrl + "assets/images/bluesky/platform-img2.jpg"
                      }
                      alt=""
                      height={500}
                    />
                    <div
                      className="icon wow zoomIn"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <a
                        className="video-popup"
                        title=" Video"
                        href="https://www.youtube.com/watch?v=442QETmJB2w"
                      >
                        <span className="icon-play-button"></span>
                      </a>
                    </div>
                  </div>

                  <div className="protfolio-details__content-text3">
                    <p>
                      The prices of the pairs offered by the demo account are
                      the same as the real ones. At this point, investors learn
                      about the operation of the market over real price ratios
                      without taking any risks. With the Forex demo account,
                      they can grasp the basic logic of the market in a short
                      time.
                      <br />
                      <br />
                      Opening a Forex demo account is very simple. After a few
                      minutes of trading, you will receive your demo account
                      login information.{" "}
                    </p>
                  </div>

                  <div className="protfolio-details__content-img3">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="protfolio-details__content-img3-single">
                          <img
                            src={
                              publicUrl +
                              "assets/images/bluesky/platform-img3.jpg"
                            }
                            alt=""
                            height={200}
                          />
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="protfolio-details__content-img3-single">
                          <img
                            src={
                              publicUrl +
                              "assets/images/bluesky/platform-img4.jpg"
                            }
                            alt=""
                            height={200}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Protfolio Details Content */}

              {/* Start Protfolio Details Sidebar */}

              {/* End Protfolio Details Sidebar */}
            </div>
          </div>
        </section>
      </>
    );
  }
}
