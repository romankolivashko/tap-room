import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props){

  return (
    <React.Fragment>
        <h2 style={{fontFamily: "Special Elite", textAlign: "center", color: "#F4C7A9"}}>Tap Selection</h2>
        <hr/>
        {props.kegList.map((keg) =>
          <Keg style={{fontFamily: "Special Elite", textAlign: "center"}}
            whenKegClicked = {props.onKegSelection}
            name={keg.name}
            description={keg.description}
            quantity={keg.quantity}
            img={keg.img}
            id={keg.id}
            key={keg.id}/>
        )}
      </React.Fragment>
  );
}

// Add propTypes for kegList.
KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;