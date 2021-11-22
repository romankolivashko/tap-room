import React from "react";
import PropTypes from "prop-types";



function KegDetail(props) {
  const { keg, onClickingDelete, } = props;

  return (
<React.Fragment>
<h2 style={{fontFamily: "Gunplay", textAlign: "center", color: "#F4C7A9"}}>Keg Details</h2>
        <br />
  <div class="card p-4 m-3" style={{width: "25rem", color: "#F4C7A9"}}>
      {/* <h2>Beer Keg Detail</h2> */}
      <h3>{keg.name}</h3>
      <h5>{keg.description}</h5>
      <h4>Pints left in  a keg: {keg.quantity}</h4>
      <img src={keg.img} alt="" />

      <div class="row">
        <div class="col">
        <button class="btn btn-success" style={{width: "10rem", marginTop: "2rem", color: "#84f9c1"}} onClick={ props.onClickingPurchase}>Sell a Pint</button>
        </div>
        <div class="col">
        <button class="btn btn-success" style={{width: "10rem", marginTop: "2rem", color: "#84f9c1"}} onClick={ props.onClickingRestock}> Refill Keg</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button class="btn btn-success" style={{width: "10rem", marginTop: "1rem", color: "#84f9c1"}} onClick={ props.onClickingEdit }>Update Keg</button>
        </div>
        <div class="col">
        <button class="btn btn-success" style={{width: "10rem", marginTop: "1rem", color: "#84f9c1"}} onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button>
        </div>
      </div>
      <br />
      </div>
</React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingPurchase: PropTypes.func
};

export default KegDetail;