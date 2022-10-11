import React, { useContext, useEffect, useState } from "react";
import { DashboardLayout } from "./DashboardLayout";
import img4 from "../assets/images/img4.jpg";
import { ProductlistContext } from "../App";
import swal from "sweetalert";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { productlist, setproductList, cartlength, setCartLength } =
    useContext(ProductlistContext);
  let navigate = useNavigate();
  const [showData, setShowData] = useState({
    subTotal: 0,
    discount: 0,
    total: 0,
  });
  const handleDelete = (list) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want delete an item",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setCartLength(cartlength.filter((data) => data.id != list.id));
        toast("Deleted Successfully");
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  const handleCartEmpty = () => {
    swal({
      title: "Are you sure?",
      text: "You Want to empty your Cart",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setCartLength([]);
      }
    });
  };
  const handleMinus = (id) => {
    setCartLength((cartlength) =>
      cartlength.map((item) =>
        id === item.id
          ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) }
          : item
      )
    );
  };
  const handlePlus = (id) => {
    setCartLength((cartlength) =>
      cartlength.map((item) =>
        id === item.id
          ? {
              ...item,
              quantity: item.quantity + (item.quantity < 10 ? 1 : 0),
            }
          : item
      )
    );
  };
  useEffect(() => {
    let dummyData = {
      subTotal: 0,
      discount: 0,
      total: 0,
    };
    cartlength.map((item) => {
      dummyData.subTotal =
        dummyData.subTotal + Number(item.price) * Number(item.quantity);
      dummyData.discount =
        dummyData.discount +
        (Number(item.price) / 100) *
          Number(item.discount) *
          Number(item.quantity);
      dummyData.total = dummyData.subTotal - dummyData.discount;
    });
    setShowData(dummyData);
  }, [showData]);

  return (
    <DashboardLayout>
      <>
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <div className="cart_heading">
              <img src={img4} />
              <h5>Cart Items</h5>
            </div>
            <div>
              <table className="cart_table">
                <tr>
                  <th>ITEM</th>
                  {/* <th>PRICE</th> */}
                  <th>NAME</th>
                  <th>Quantity</th>
                  <th>PRICE</th>
                  <th>REMOVE</th>
                </tr>
                {cartlength.length && cartlength.length > 0 ? (
                  <>
                    {cartlength.map((list) => {
                      return (
                        <tr>
                          <td>
                            <img src={list.img} className="carty_img" />
                            {list.company}
                          </td>
                          {/* <td> {list.price}</td> */}
                          <td>{list.name}</td>
                          <td>
                            <div className="add-minus">
                              <div>
                                <i
                                  className="fas fa-minus"
                                  onClick={() => handleMinus(list.id)}
                                ></i>
                                <input
                                  type="text"
                                  placeholder={list.quantity}
                                  className="quantity_input"
                                />
                                <i
                                  className="fas fa-plus add"
                                  onClick={() => handlePlus(list.id)}
                                />
                              </div>
                            </div>
                          </td>
                          <td>{list.price * list.quantity}</td>
                          <td className="text-center">
                            <i
                              class="fa fa-trash cart_hover"
                              id="delete_icon"
                              aria-hidden="true"
                              onClick={() => {
                                handleDelete(list);
                              }}
                            ></i>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <div className="no_data">No Item in cart</div>
                  </>
                )}
              </table>
              <div className="cart_btns">
                <button
                  className="btn btn-secondary btn_secondary"
                  onClick={() => navigate("/products")}
                >
                  Continue Shopping
                </button>
                <button
                  className="btn btn-secondary btn_secondary "
                  onClick={() => {
                    handleCartEmpty();
                  }}
                >
                  Empty Cart
                </button>
              </div>
            </div>
            <div className="card_subtotal">
              <div className="cards_subContent">
                <h7>
                  Subtotal:
                  <span className="float-end"> {showData.subTotal}</span>
                </h7>
                <h6 class="discount">
                  Discount:
                  <span className="float-end">-{showData.discount} </span>
                </h6>
                <h7>
                  Total:
                  <span className="float-end">{showData.total}</span>
                </h7>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </>
    </DashboardLayout>
  );
};
