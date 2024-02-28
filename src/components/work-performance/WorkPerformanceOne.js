import React from "react";

export default class WorkPerformanceOne extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".dial").length) {
      $(".dial").appear(
        function () {
          var elm = $(this);
          var color = elm.attr("data-fgColor");
          var perc = elm.attr("value");
          elm.knob({
            value: 0,
            min: 0,
            max: 100,
            skin: "tron",
            readOnly: true,
            thickness: 0.15,
            dynamicDraw: true,
            displayInput: false,
          });
          $({
            value: 0,
          }).animate(
            {
              value: perc,
            },
            {
              duration: 2000,
              easing: "swing",
              progress: function () {
                elm.val(Math.ceil(this.value)).trigger("change");
              },
            }
          );
          $(this).append(function () {});
        },
        {
          accY: 20,
        }
      );
    }

    if ($(".count-box").length) {
      $(".count-box").appear(
        function () {
          var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

          if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
              countNum: $t.find(".count-text").text(),
            }).animate(
              {
                countNum: n,
              },
              {
                duration: r,
                easing: "linear",
                step: function () {
                  $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function () {
                  $t.find(".count-text").text(this.countNum);
                },
              }
            );
          }
        },
        {
          accY: 0,
        }
      );
    }
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="work-perfomance-one-sec">
          <div className="container">
            <div className="row">
              {/* Start Work Perfomance One Content */}
              <div className="col-xl-7">
                <div className="work-perfomance-one__content">
                  <div className="sec-title">
                    <div className="sec-title__tagline">
                      <h6> Company Profile</h6> <span className="right"></span>
                    </div>
                    <h2 className="sec-title__title">
                      Blue Sky Markets is a broker company operating with a St
                      Vincent license since 2017.
                    </h2>
                    <p className="sec-title__text">
                      Blue Sky Markets team is here to provide you a service
                      above world standards. With more than 140 products and
                      several account options tailored for each investor's
                      needs, we offer satisfaction guarantee to all our
                      investors who want to take part in Forex markets. <br />
                      <br />
                      Featuring the MetaTrader4 and MetaTrader5 trading
                      platforms, we provide our customers with a 5/24 service
                      with a leverage ratio of 1:200. <br />
                      <br /> We produce special solutions for our customers, who
                      are just starting to trade in the markets and who are
                      traders in the forex markets for a long time. Our expert
                      investment consultants and customer service team are on
                      your side to make sure your trading operates in a safe
                      way.
                      <br />
                      <br /> Investor friendly service understanding, fast
                      deposit/withdrawal opportunities and last minute
                      developments regarding the market are all just a few of
                      the opportunities that Blue Sky Markets customers will
                      benefit from. You can be sure that our team will provide
                      all necessary support and will do whatever it takes to get
                      a more comfortable and secure investment experience!
                    </p>
                  </div>
                  
                </div>
                {/* End Work Perfomance One Content */}
              </div>

              {/* Start Work Perfomance One Img */}
              <div className="col-xl-5">
                <div className="work-perfomance-one__img">
                  <img src={"assets/images/bluesky/Bluesky.jpg"} alt="" />
                </div>
              </div>
              {/* Start Work Perfomance One Img */}
            </div>
          </div>
        </section>
      </>
    );
  }
}
