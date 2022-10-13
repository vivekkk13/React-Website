import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductlistContext } from "../App";
import { Navbar } from "../common/Navbar";
import { Cart } from "./Cart";
import { DashboardLayout } from "./DashboardLayout";
import Sidebar from "./sidebar";

export const Products = () => {
  const { productlist, setproductList, cartlength, setCartLength } =
    useContext(ProductlistContext);
  const [search, setSearch] = useState("");
  const [newList, setNewList] = useState(productlist);
  const navigate = useNavigate();

  /******************* function for get nubers of items in cart************************* */
  const handleCart = (item) => {
    if (cartlength.find((list) => list.id == item.id)) {
      setCartLength(cartlength);
    } else {
      setCartLength([...cartlength, item]);
    }
  };

  /*************** function for search in a product list******************** */
  useEffect(() => {
    if (search == "") {
      setproductList(newList);
      console.log("afsdfsdfs", newList);
    } else {
      setproductList(newList.filter((list) => list.name.includes(search)));
    }
  }, [search]);

  return (
    <DashboardLayout>
      <div className="container">
        <div className="products_colms">
          <div className="row row_distance ">
            <div className="col-lg-2 sidebar_dist ">
              <div class="input-group rounded search_bar">
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
              <Sidebar />
            </div>
            <div className="col-lg-8">
              <div className="featuess">
                <span className="product_span">
                  {productlist.length} Total products
                </span>
                <div className="container">
                  <div className="row">
                    {productlist.map((item) => (
                      <div className="col-lg-4">
                        <div className="features-service">
                          <div className="features-content">
                            <div className="cards-iphonee">
                              <div className="cards-space">
                                <img
                                  src={item.img}
                                  width="100%"
                                  className="img-iphone"
                                />
                                <div className="card-footer">
                                  <small>{item.name}</small>
                                  <small>${item.price}</small>
                                </div>
                                <p className="off_today">
                                  {item.discount}% off Today
                                </p>
                                <button
                                  className="btn btn-secondary footer_btn"
                                  onClick={() => {
                                    handleCart(item);
                                  }}
                                >
                                  Add to cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
