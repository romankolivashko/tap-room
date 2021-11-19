import React from "react";
import logo from './img/logo.png'
import '../App.css';

function SidePanel(){
  return (
    <React.Fragment>
      <img class="card-img-top sm" className="side-logo" src={logo} alt="" />
    </React.Fragment>
  );
}

export default SidePanel;

