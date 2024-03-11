import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ToastComponent from "../toastComponent/ToastComponent";
const ContactForm = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qdrm1n8",
        "template_mc91pa9",
        form.current,
        "SnhIAoux4ygkXsY6u"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setShowAlert(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-5">
              <div className="contact-page__content">
                <div className="title">
                  <h2>Get In Touch</h2>
                </div>

                <div className="contact-page__content-single">
                  <div className="contact-page__content-single-inner">
                    <div className="icon-box">
                      <span className="icon-pin"></span>
                    </div>

                    <div className="content-box">
                      <h2>Address</h2>
                      <p>
                        5 floor, First St Vincent Bank Ltd Building, James
                        street, Kingstown,
                        <br /> St.Vincent and Grenadines, P.O. Box 1570,
                        Kingstown
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-page__content-single">
                  <div className="contact-page__content-single-inner">
                    <div className="icon-box">
                      <span className="icon-phone-call-1"></span>
                    </div>

                    <div className="content-box">
                      <h2>Phone</h2>
                      <p className="number1">
                        <a href="tel:+902127000953">0212 700 09 53 (TR)</a>
                      </p>
                      <p className="number2">
                        <a href="tel:38269520543">+382 69 520 543</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-page__content-single">
                  <div className="contact-page__content-single-inner">
                    <div className="icon-box">
                      <span className="icon-email"></span>
                    </div>

                    <div className="content-box">
                      <h2>Email </h2>
                      <p className="email1">
                        <a href="mailto:info@blueskymarkets.me">
                          info@blueskymarkets.me
                        </a>
                      </p>
                      <p className="email2">
                        <a href="mailto:Support@blueskymarkets.me">
                          Support@blueskymarkets.me
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 col-md-7">
              <div className="contact-page__form">
                {showAlert && (
                  <ToastComponent
                    showAlert={showAlert}
                    setShowAlert={setShowAlert}
                  />
                )}
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="comment-one__form contact-form-validated"
                  novalidate="novalidate"
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Full Name*"
                          name="from_name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="Email address*"
                          name="user_email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Phone*"
                          name="to_phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Reference"
                          name="reference"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="comment-form__input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                        ></textarea>
                      </div>

                      <button
                        className="thm-btn comment-form__btn"
                        data-text="Send Message +"
                        type="submit"
                        data-loading-text="Please wait..."
                        value="Send"
                      >
                        Send Message +
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactForm;
