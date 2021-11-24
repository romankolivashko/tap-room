import React from "react";
import PropTypes from "prop-types";
import './Keg.css';

function Keg(props) {
  return (
    <React.Fragment>
      <div className="card p-0 h-50 border border-danger" style={{width: "15rem", color: "#F4C7A9"}} onClick = {() => props.whenKegClicked(props.id)}>
      <img className="card-img-top p-3" src={props.img} alt="" />
        <h5 className="card-title" style={{textAlign: "center"}} >{props.name}</h5>
        <h5 className="card-title" style={{textAlign: "center"}}>{props.description}</h5>
        <h5 style={{textAlign: "center"}}>Available: {props.quantity} pints</h5>
        <br />
      </div>
    </React.Fragment>

  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  img: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;