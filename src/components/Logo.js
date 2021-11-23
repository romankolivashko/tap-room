import React from "react";
import logo1 from './img/logo1.png';
import './Logo.css';

function Logo(){

  return (
    <React.Fragment>
      <div class="logotop">
      <img src={logo1} className="logotop" alt="logo" />
      </div>
      <br />
    </React.Fragment>
  );
}

export default Logo;