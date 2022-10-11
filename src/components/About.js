import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "./DashboardLayout";
import img1 from "../assets/images/img1.jpg";
import { Footer } from "../common/Footer";

export const About = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <>
        <section className="home-section">
          <div className="container">
            <div className="home_page">
              <div className="row">
                <div className="col-lg-6">
                  <div className="home_space">
                    <p>
                      welcome to <h3> Store</h3>
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
        <Footer />
      </>
    </DashboardLayout>
  );
};
