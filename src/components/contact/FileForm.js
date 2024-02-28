import React from "react";

export default class FileForm extends React.Component {
  render() {
    return (
      <>
        <div className="contact-page backgroundBlackColor">
          <div className="container ">
            <div className="row ">
              <div className="col-xl-12 col-lg-8 col-md-7  backgroundColorWhite">
                <div className="contact-page__form ">
                  <form
                    action="#"
                    className="comment-one__form contact-form-validated"
                    novalidate="novalidate"
                  >
                  <h1 className="inputTitle ">OPEN ACCOUNT NOW!</h1>
                  <p className="inputTitle">FILL OUT THE FORM TO OPEN AN ACCOUNT</p>
                  <p className="text-center mb-5">Make sure your information is complete</p>
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
                            name="Reference"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12">
                        <div className="comment-form__input-box text-message-box">
                          <label>
                            <i className="fa-solid fa-paperclip"></i>File:
                            <input type="file" />
                          </label>
                        </div>

                        <button
                          className="thm-btn comment-form__btn"
                          data-text="Send File +"
                          type="submit"
                          data-loading-text="Please wait..."
                        >
                          Send File +
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <div className="form-box">
              <h1 className="text-center">Simple Contact Form</h1>
             
              <form action="https://api.formbucket.com/f/c2K3QTQ" method="post">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control w-100"
                    id="name"
                    type="text"
                    name="Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control w-100"
                    id="email"
                    type="email"
                    name="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control w-100 "
                    id="message"
                    name="Message"
                  ></textarea>
                </div>
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}
