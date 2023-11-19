import React from "react";
import img7 from "../img/image 10.png";
import { TiArrowSortedDown } from "react-icons/ti";

const Header = () => {
  return (
    <div className="container">
      <div className="text-center pt-4 text-white">
        <p>User Landing page</p>
        <hr className="bg-white border border-white" />
        <hr className="bg-white border border-white" />
      </div>
      <div
        className="d-flex justify-content-between align-items-center mt-4"
        style={{ width: "80%", margin: "auto" }}
      >
        <a href="#">
          <img src={img7} alt="#" width="80px" height="70" />
        </a>
        <div className="w-100 d-flex align-items-center">
          <ul className="nav justify-content-between w-100 ">
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Refer & Earn
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Location
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Free Listing
              </a>
            </li>
            <li className="nav-item ">
              <a href="#" className="nav-link text-white">
                Notification
              </a>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-outline-dark"
          style={{ borderRadius: "20px" }}
        >
          <b>Login</b>
        </button>
      </div>
      <div
        className="d-flex justify-content-between align-items-center mt-4 border border-black text-center bg-white"
        style={{ width: "80%", margin: "auto" }}
      >
        <div className="d-flex align-items-center" style={{ width: "150px" }}>
          <p>Tirupur</p>
          <h1 className="bg-secondary rounded m-2">
            <TiArrowSortedDown />
          </h1>
        </div>
        <p>Search name or Service</p>
        <div className="d-flex">
          <h1 className="bg-secondary rounded m-2">
            <TiArrowSortedDown />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
