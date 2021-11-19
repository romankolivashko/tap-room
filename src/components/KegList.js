import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props){

  return (
    <React.Fragment>
        <hr/>
        {props.kegList.map((keg) =>
          <Keg 
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