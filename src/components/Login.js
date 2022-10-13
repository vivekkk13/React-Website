import React, { useEffect, useState, Component } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { LoginApiData } from "./Services";
import swal from "sweetalert";
import OTPInput from "react-otp-input";

export const Login = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isLoading, setIsLoading] = useState(false);
  const [sampleNumber, setSampleNumber] = useState([]);
  const [formValues, setFormvalues] = useState({
    username: "",
    password: "",
  });
  const [OTP, setOTP] = useState("");

  /****************************** Function to set OTP **************** */

  function handleChanges(OTP) {
    setOTP(OTP);
  }

  /********************** function to set Input Values ****************************** */

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormvalues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  /***************************   Function to get a random Number   ******************* */

  const getRandomNumber = () => {
    let min = 1000;
    let max = 9999;
    setSampleNumber([Math.round(Math.random() * (max - min) + min)]);
  };
  useEffect(() => {
    getRandomNumber();
  }, []);

  /***********************   Function to Fetch Login Credentials ************************ */
  const getLoginApi = async (values) => {
    setIsLoading(true);
    let ApiData = await LoginApiData(values);
    setIsLoading(false);
    console.log("ApiData==>>", ApiData);
    if (ApiData.status === 200) {
      setShow(true);
      localStorage.setItem("Number", sampleNumber);
    }
  };

  /***************** function to get a random number in localstorage **************** */

  let number = localStorage.getItem("Number");

  /******************* Function to check Weather OTP matches or Not ********************* */

  const handleOtpVerify = () => {
    if (OTP == number) {
      navigate("/products");
    } else {
      setErr(true);
    }
  };

  return (
    <>
      <div className="container">
        <div className="login-data">
          <form>
            <h2>Login</h2>
            <div class="form-outline mb-4">
              <input
                type="text"
                id="form2Example1"
                value={formValues.email}
                onChange={handleChange}
                class="form-control"
                placeholder="UserName"
                name="username"
              />
              <label class="form-label" for="form2Example1">
                UserName
              </label>
            </div>

            <div class="form-outline mb-4">
              <input
                type="password"
                value={formValues.password}
                onChange={handleChange}
                id="form2Example2"
                name="password"
                class="form-control"
                placeholder="password"
              />
              <label class="form-label" for="form2Example2">
                Password
              </label>
            </div>

            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                    checked
                  />
                  <label class="form-check-label" for="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div class="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button
              type="button"
              class="btn btn-primary btn-block mb-4 submit-btn "
              onClick={() => {
                getLoginApi(formValues);
                getRandomNumber();
              }}
            >
              Sign in
            </button>

            <div class="text-center">
              <p>or sign up with:</p>
              <button type="button " class="btn btn-link btn-floating mx-1 ">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button " class="btn btn-link btn-floating mx-1 ">
                <i class="fab fa-google"></i>
              </button>

              <button type="button " class="btn btn-link btn-floating mx-1 ">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button " class="btn btn-link btn-floating mx-1 ">
                <i class="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
        {isLoading && <Loading />}
        <Modal show={show} onHide={handleClose}>
          <div className="modal-content modal_color">
            <div className="modal-header modal_spacing">
              <div className="verifyDiv">
                <p className="p1">Verify Account</p>
                <p className="p2">
                  An OTP has been sent to your entered email abcd@gmail.com
                </p>
                <div className="otpElements">
                  <p className="p3">Enter your Code here</p>
                  <div className="otp">
                    <OTPInput
                      onChange={handleChanges}
                      value={OTP}
                      inputStyle="inputStyle"
                      numInputs={4}
                      separator={<span></span>}
                    />
                  </div>

                  <p className="err_clr">{err ? "Invalid Otp!" : ""}</p>
                  <p className="resend">Resend</p>
                </div>
                <button
                  className="buttons"
                  type="submit"
                  onClick={handleOtpVerify}
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};
