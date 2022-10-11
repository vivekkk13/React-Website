import React from "react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="footer-section">
        <div className="container">
          {/* <div className="footer-upper-wrapper">
            <div className="footer-content">
              <p>
                Ready to get started? <br />
                Talk to us today
              </p>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Get Started
              </button>
            </div>
          </div> */}
          <div className="footer-wrapper">
            <div className="row">
              <div className="col-lg-3 color-footer">
                <h6>Ecommerce website</h6>
                <small>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </small>
              </div>
              <div className="col-lg-3 color-footer">
                <p>Subscribe to get important notes</p>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Your-Email"
                  />
                </div>
                <button className="btn btn-secondary"> Subscribe</button>
              </div>
              <div className="col-lg-3 color-footer">
                <small>Follow us</small>
                <div className="icon-wrapper">
                  <div className="icons-icon">
                    <i class="fab fa-facebook-f icon-space"></i>

                    <i class="fab fa-twitter icon-space"></i>
                    <i class="fab fa-github icon-space"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 color-footer">
                <small>Call us</small>
                <div>
                  <a className="footer-phone number" href="tel:123455688766">
                    +91-3344223344
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="line-hr" />
          <div className="container">
            <div className="footer-style">
              <p className="footer-bottom">@Google.All Rights Reserved</p>
              <div className="footer-policy">
                <p>Privacy Policy</p>
                <p className="ps-3">Terms&Conditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
