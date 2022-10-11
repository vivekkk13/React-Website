import React from "react";
import { Footer } from "../common/Footer";
import { DashboardLayout } from "./DashboardLayout";

export const Contact = () => {
  return (
    <DashboardLayout>
      <>
        <div className="container">
          <h4 className="contact-heading">Feel Free to Contact Us</h4>
          <div className="contact-form">
            <form>
              <div class="form-group">
                <label>Username</label>
                <input
                  type="text"
                  class="form-control contact-form-input"
                  aria-describedby="emailHelp"
                  placeholder="Username"
                />
              </div>
              <div class="form-group ">
                <label>Email</label>
                <input
                  type="text"
                  class="form-control contact-form-input"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <label>Description</label>
                <input
                  type="text"
                  class="form-control contact-form-input Description-contact "
                  placeholder="Description"
                />
              </div>

              <button type="submit" class="btn btn-secondary contact-btn ">
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </>
    </DashboardLayout>
  );
};
