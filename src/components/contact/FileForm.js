import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ToastComponent from "../toastComponent/ToastComponent";
const FileForm = () => {
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
                  <h1 className="inputTitle ">OPEN ACCOUNT NOW!</h1>
                  <p className="inputTitle">
                    FILL OUT THE FORM TO OPEN AN ACCOUNT
                  </p>
                  <p className="text-center mb-5">
                    Make sure your information is complete
                  </p>
                  <div className="row ">
                    <h4 className="inputTitle">APPLY NOW</h4>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Full name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          name="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input type="text" placeholder="Phone" name="phone" />
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
                        <label>
                          <i className="fa-solid fa-paperclip"></i>File:
                          <input type="file" name="file" />
                        </label>
                      </div>

                      <button
                        className="thm-btn comment-form__btn"
                        data-text="Send Message +"
                        type="submit"
                        data-loading-text="Please wait..."
                        value="Send"
                      >
                        Send File +
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
export default FileForm;
