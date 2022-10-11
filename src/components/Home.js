import React from "react";
import { DashboardLayout } from "./DashboardLayout";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.png";
import img10 from "../assets/images/img10.png";
import img11 from "../assets/images/img11.png";
import img12 from "../assets/images/img12.png";
import { useNavigate } from "react-router-dom";
import { Footer } from "../common/Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <>
        <section className="home-section">
          <div className="container">
            <div className="home_page">
              <div className="row ">
                <div className="col-lg-6 ">
                  <div className="home_space">
                    <p>
                      welcome to <h3 className=""> Store</h3>
                    </p>
                    <small>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </small>
                    <div>
                      <button
                        type="button"
                        class="btn btn-secondary btn-home"
                        onClick={() => navigate("/products")}
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="img-Home">
                    <img src={img1} width="70%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="featues">
          <div className="container">
            <div className="feature-services">
              <div className=" mb-3 feature-heading">
                <p>check Now</p>
                <h4>Our Feature Services</h4>
              </div>
              <div className="feature-content">
                <div className="card-iphone">
                  <div className="cards-space">
                    <img src={img2} width="100%" className="img-iphone" />
                    <div className="card-footer">
                      <small>iphone-x</small>
                      <small>$2300</small>
                    </div>
                  </div>
                </div>
                <div className="card-iphone">
                  <div className="cards-space">
                    <img src={img3} width="100%" className="img-iphone" />
                    <div className="card-footer">
                      <small>Samsung</small>
                      <small>$2000</small>
                    </div>
                  </div>
                </div>
                <div className="card-iphone card_margin">
                  <div className="cards-space">
                    <img src={img4} width="100%" className="img-iphone" />
                    <div className="card-footer">
                      <small>Apple Watch</small>
                      <small>$700</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="payment">
          <div className="container">
            <div className="payment-wrapper">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-4">
                  <div className="cards-items">
                    <img src={img5} width="100px" className="truck-img" />
                    <p className="mb-0">Super Fast and Free Delivery</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div>
                    <div className="display_flex cards-items py-3 space_cards">
                      <img src={img8} width="30px" className="truck-img" />
                      <p className="pt-0 mb-0">Money Back gurantee</p>
                    </div>
                    <div className="display_flex cards-items py-3">
                      <img src={img7} width="30px" className="truck-img" />
                      <p className="pt-0 mb-0">Money Back gurantee</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="cards-items">
                    <img src={img6} width="100px" className="truck-img" />
                    <p>Super Secure Payment System</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="companies">
          <div className="container">
            <div className="companies-wrapper">
              <div className="companies-content">
                <p className="companies-count">Trusted by 1000+ companies</p>
                <div className="company-img">
                  <img src={img9} width="100px" className="c-img" />
                  <img src={img10} width="100px" className="c-img" />
                  <img src={img11} width="100px" className="c-img" />
                  <img src={img12} width="100px" className="c-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </DashboardLayout>
  );
};

export default Home;
