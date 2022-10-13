import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./common/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Products } from "./components/Products";
import { Login } from "./components/Login";
import { createContext, useState } from "react";
import img4 from "../src/assets/images/img4.jpg";
import img2 from "../src/assets/images/img2.jpg";
import img3 from "../src/assets/images/img3.jpg";
import { Cart } from "./components/Cart";

export const ProductlistContext = createContext();

function App() {
  const [productlist, setproductList] = useState([
    {
      id: 1,
      company: "laptop",
      name: "iphone-x",
      img: img2,
      price: "10000",
      discount: "50",
      quantity: 1,
    },
    {
      id: 2,
      company: "apple",
      quantity: 1,
      discount: "50",
      name: "samsung",
      img: img3,
      price: "23400",
    },
    {
      id: 3,
      company: "laptop",
      discount: "60",
      name: "redmi",
      quantity: 1,

      img: img4,
      price: "20034",
    },
    {
      id: 4,
      company: "laptop",
      name: "iphone-x",
      discount: "40",
      img: img2,
      quantity: 1,

      price: "23004",
    },
    {
      id: 5,
      company: "watch",
      name: "Macbook",
      quantity: 1,
      discount: "70",
      img: img4,
      price: "11234",
    },
    {
      id: 6,
      company: "watch",
      quantity: 1,
      discount: "60",
      name: "iphone-x",
      img: img3,
      price: "66234",
    },
    {
      id: 7,
      company: "mobile",
      name: "ipad",
      img: img2,
      price: "33234",
      quantity: 1,
      discount: "25",
    },
    {
      id: 8,
      company: "mobile",
      name: "iphone-x",
      img: img4,
      quantity: 1,
      discount: "15",
      price: "55234",
    },
    {
      id: 9,
      company: "computer",
      name: "nokia",
      img: img3,
      price: "34234",
      quantity: 1,
      discount: "20",
    },
    {
      id: 10,
      company: "computer",
      name: "ipad",
      quantity: 1,
      discount: "15",

      img: img2,
      price: "80234",
    },
  ]);
  const [cartlength, setCartLength] = useState([]);
  return (
    <ProductlistContext.Provider
      value={{ productlist, setproductList, cartlength, setCartLength }}
    >
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </HashRouter>
    </ProductlistContext.Provider>
  );
}

export default App;
