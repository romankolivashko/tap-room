import React from "react";
import banner from './img/beer.gif';
import './Banner.css';

function Banner(){

  return (
    <React.Fragment>
      <div class="banner">
      <img src={banner} className="banner" alt="loading..." />
      </div>
      <br />
    </React.Fragment>
  );
}

export default Banner;