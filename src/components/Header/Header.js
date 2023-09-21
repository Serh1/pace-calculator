import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import EarthBanner from "../../assets/img/earth.png";
import Input from "../Input";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="content-wrapper">
          <div className="title-secondary">YOUR</div>
          <div className="title-main"> PACE </div>
          <Input />
        </div>
      </div>
      <img className="earth_img" src={EarthBanner}></img>
    </header>
  );
};

export default Header;
