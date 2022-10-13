import React, { useContext, useEffect, useState } from "react";
import { ProductlistContext } from "../App";

const Sidebar = () => {
  const { productlist, setproductList } = useContext(ProductlistContext);
  const [mobiledata, setMobileData] = useState(productlist);

  /******************** function to  filter items "MOBILE"******************************* */

  const handleSubmit = () => {
    setproductList(mobiledata.filter((list) => list.company === "mobile"));
  };

  /******************** function to  filter items "LAPTOP"******************************* */

  const handleSearch = () => {
    setproductList(mobiledata.filter((list) => list.company === "laptop"));
  };

  /******************** function to  filter items "WATCH"******************************* */

  const handleWatch = () => {
    setproductList(mobiledata.filter((list) => list.company === "watch"));
  };

  /******************** function to  filter items "COMPUTER"******************************* */

  const handleComputer = () => {
    setproductList(mobiledata.filter((list) => list.company === "computer"));
  };

  /******************** function to  filter  ALL items ******************************* */

  const handleFilter = () => {
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

        <button
          className="btn btn-secondary sidebar_btn"
          onClick={handleFilter}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
