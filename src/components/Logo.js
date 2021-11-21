import React from "react";
import logotop from './img/logotop.png'

function Logo(){

  return (
    <React.Fragment>
      <div class="logotop">
      <img src={logotop} className="logotop" alt="logo" />
      </div>
      <br />
    </React.Fragment>
  );
}

export default Logo;