import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div class="card p-0 overflow-hidden h-50 shadow" style={{width: "18rem"}} onClick = {() => props.whenKegClicked(props.id)}>
      <img class="card-img-top img-fluid" src={props.img} />
        <h5 class="card-title">{props.name}</h5>
        <h5 class="card-title">{props.description}</h5>
        <p><em>{props.quantity}</em></p>
      </div>
    </React.Fragment>

  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  img: PropTypes.string,
  whenKClicked: PropTypes.func
};

export default Keg;