import React from "react";
import './Header.css';

function Header(){
  return (
    <React.Fragment>
      <div className="header">
      <h1 style={{fontSize: "35px"}}>Wanted: Beer Drinkers & Hell Raisers!</h1>
      </div>
      <br />
    </React.Fragment>
  );
}

export default Header;