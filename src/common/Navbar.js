import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ProductlistContext } from "../App";
import swal from "sweetalert";

export const Navbar = () => {
  const navigate = useNavigate();
  const { productlist, setproductList, cartlength, setCartLength } =
    useContext(ProductlistContext);

  /************************* function to navigate to home page ************ */

  const handleHome = () => {
    navigate("/home");
  };

  /********************* function to navigate to about page**************** */

  const handleAbout = () => {
    navigate("/about");
  };

  /********** variable to get number in localstorage*********************** */

  const Name = localStorage.getItem("Number");

  /***************function for logout from website************************* */

  const handleLogOut = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want LogOut",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.clear();
        navigate("/home");
      } else {
      }
    });
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid custom_flex">
          <div className="logo_img">
            <a class="navbar-brand nav-heading ">
              <srong>E</srong>-Commerce
            </a>
            <span className="cart-icon  show_mobile">
              <i
                className="fa fa-shopping-cart cart_hover"
                aria-hidden="true"
                onClick={() => {
                  navigate("/cart");
                }}
              ></i>
              <small className="add_cart"> {cartlength.length}</small>
            </span>
          </div>

          <ul class="navbar-nav  mb-2 mb-lg-0 ml-auto position-relative">
            <li class="nav-item link_hover">
              <a class="nav-link active" onClick={handleHome}>
                Home
              </a>
            </li>
            <li class="nav-item link_hover">
              <a class="nav-link active" onClick={handleAbout}>
                About
              </a>
            </li>
            <li class="nav-item link_hover">
              <a class="nav-link active" onClick={() => navigate("/Products")}>
                Products
              </a>
            </li>
            <li class="nav-item link_hover">
              <a class="nav-link active" onClick={() => navigate("/Contact")}>
                Contact
              </a>
            </li>
            {Name ? (
              <div className="hello_navbar">Hello,User</div>
            ) : (
              <>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Log In
                </button>
              </>
            )}

            <span className="cart-icon mobile_hidden">
              <i
                className="fa fa-shopping-cart cart_hover"
                aria-hidden="true"
                onClick={() => {
                  navigate("/cart");
                }}
              ></i>
              <small className="add_cart"> {cartlength.length}</small>
            </span>
            {Name ? (
              <>
                <button
                  className="btn btn-secondary log_out"
                  onClick={() => {
                    handleLogOut();
                  }}
                >
                  Log out
                </button>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
};
