import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export default class BrandOne extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="brand-one-sec">
          <div
            className="brand-one__bg"
            style={{
              backgroundImage:
                "url(" +
                publicUrl +
                "assets/images/backgrounds/brand-v1-bg.png)",
            }}
          ></div>
          <div className="container">
            <Swiper
              loop={true}
              spaceBetween={50}
              slidesPerView={5}
              speed={1400}
              freeMode={true}
              watchSlidesVisibility={true}
              watchSlidesProgress={true}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                0: {
                  spaceBetween: 30,
                  slidesPerView: 1,
                },
                375: {
                  spaceBetween: 30,
                  slidesPerView: 2,
                },
                575: {
                  spaceBetween: 30,
                  slidesPerView: 2,
                },
                767: {
                  spaceBetween: 30,
                  slidesPerView: 3,
                },
                991: {
                  spaceBetween: 30,
                  slidesPerView: 4,
                },
                1199: {
                  spaceBetween: 30,
                  slidesPerView: 4,
                },
              }}
              className="thm-swiper__slider swiper-container"
            >
              <div className="swiper-wrapper">
                {/* Start Brand One Single */}
                <SwiperSlide className="swiper-slide">
                  <Link to={`/`}>
                    <img
                      src={"assets/images/bank/amex.png"}
                      alt=""
                      width={180}
                    />
                  </Link>
                </SwiperSlide>
                {/* End Brand One Single */}

                {/* Start Brand One Single */}
                <SwiperSlide className="swiper-slide">
                  <Link to={`/`}>
                    <img
                      src={"assets/images/bank/master.png"}
                      alt=""
                      width={180}
                    />
                  </Link>
                </SwiperSlide>
                {/* End Brand One Single */}

                {/* Start Brand One Single */}
                <SwiperSlide className="swiper-slide">
                  <Link to={`/`}>
                    <img
                      src={"assets/images/bank/visa.png"}
                      alt=""
                      width={180}
                    />
                  </Link>
                </SwiperSlide>
                {/* End Brand One Single */}

                {/* Start Brand One Single */}
                <SwiperSlide className="swiper-slide">
                  <Link to={`/`}>
                    <img
                      src={"assets/images/bank/jcb.png"}
                      alt=""
                      width={180}
                    />
                  </Link>
                </SwiperSlide>
                {/* End Brand One Single */}

                {/* Start Brand One Single */}
                <SwiperSlide className="swiper-slide">
                  <Link to={`/`}>
                    <img
                      src={"assets/images/bank/discover.png"}
                      alt=""
                      width={180}
                    />
                  </Link>{" "}
                </SwiperSlide>
                {/* End Brand One Single */}
              </div>
            </Swiper>
          </div>
        </section>
      </>
    );
  }
}
