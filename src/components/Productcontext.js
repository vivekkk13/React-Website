import React, { createContext, useState } from "react";
import img1 from "../assets/images/img1.jpg";
import { Products } from "./Products";

export const ProductlistContext = createContext();

export const Productcontext = () => {
  const [productlist, setproductList] = useState([
    {
      company: "apple",
      name: "iphone-x",
      img: img1,
      price: "234",
    },
    {
      company: "apple",
      name: "iphone-x",
      img: "",
      price: "234",
    },
    {
      company: "apple",
      name: "iphone-x",
      img: "",
      price: "234",
    },
    {
      company: "apple",
      name: "iphone-x",

      img: "",
      price: "234",
    },
    {
      company: "apple",
      name: "iphone-x",
      img: "",
      price: "234",
    },
    {
      company: "apple",
      name: "iphone-x",
      img: "",
      price: "234",
    },
    {
      company: "apple",
      name: "iphone-x",
      img: "",
      price: "234",
    },
    {
      company: "apple",
      name: "iphone-x",
      img: "",
      price: "234",
    },
    {
      company: "apple",
      name: "iphone-x",
      img: "",
      price: "234",
    },
    {
      company: "apple",
      name: "iphone-x",
      img: "",
      price: "234",
    },
  ]);
  return (
    <>
      <ProductlistContext.Provider value={{ productlist, setproductList }}>
        <Products />
      </ProductlistContext.Provider>
    </>
  );
};
