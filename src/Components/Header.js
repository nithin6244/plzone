import React from "react";
import logo from "../assets/images/logo.png";
import { Data } from "../Data/Data";

function Header() {
  return (
    <div className="header-container">
      <div className="logo-links">
        <p>Club sites : </p>
        {Data.teams.map((item, index) => {
          return (
            <a href={item.social.facebook} className="link" key={index}>
              <img src={item.images.crest} alt="" className="small-logo" />
            </a>
          );
        })}
      </div>
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="" className="logo" />
          <p className="logo-header">Premier League</p>
        </div>
        <p>No room for racism</p>
      </div>
    </div>
  );
}

export default Header;
