import React, { useContext, useEffect, useState } from "react";
import { ProductlistContext } from "../App";

const Sidebar = () => {
  const { productlist, setproductList } = useContext(ProductlistContext);
  const [mobiledata, setMobileData] = useState(productlist);
  const [active, setActive] = useState("");

  const handleSubmit = () => {
    setproductList(mobiledata.filter((list) => list.company === "mobile"));
  };

  const handleSearch = () => {
    setproductList(mobiledata.filter((list) => list.company === "laptop"));
  };
  const handleWatch = () => {
    setproductList(mobiledata.filter((list) => list.company === "watch"));
  };
  const handleComputer = () => {
    setproductList(mobiledata.filter((list) => list.company === "computer"));
  };
  const handleFix = () => {
    setproductList(mobiledata);
  };

  return (
    <div class="sidebar">
      <div>
        <h6>Category</h6>

        <li>
          <a onClick={handleSubmit}>Mobile</a>
        </li>
        <li>
          <a onClick={handleSearch}> laptop</a>
        </li>
        <li>
          {" "}
          <a onClick={handleWatch}>watch</a>
        </li>
        <li>
          <a onClick={handleComputer}>computer</a>
        </li>

        <button className="btn btn-secondary sidebar_btn" onClick={handleFix}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
