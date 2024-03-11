import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ToastComponent from "../toastComponent/ToastComponent";
const MoneyForm = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qdrm1n8",
        "template_73a3cvt",
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
      <div className="contact-page backgroundBlackColor">
        <div className="container ">
          <div className="row ">
            <div className="col-xl-12 col-lg-8 col-md-7  backgroundColorWhite">
              <div className="contact-page__form ">
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
                  <h1 className="inputTitle ">WITHDRAW MONEY</h1>
                  <p className="inputTitle">
                    FILL OUT THE FORM TO WITHDRAW MONEY
                  </p>
                  <p className="text-center mb-5">
                    Make sure all information is right.
                  </p>
                  <div className="row ">
                    <h4 className="inputTitle">APPLY NOW</h4>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Full name"
                          name="from_name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          name="user_email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input type="text" placeholder="Phone" name="to_phone" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Account Number"
                          name="account-number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="comment-form__input-box text-message-box">
                        <label>
                          Withdrawal Amount:
                          <input type="number" name="withdrawal-amount" />
                        </label>
                      </div>

                      <button
                        className="thm-btn comment-form__btn"
                        data-text="Withdraw +"
                        type="submit"
                        data-loading-text="Please wait..."
                        value="Send"
                      >
                        Withdraw
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
export default MoneyForm;
