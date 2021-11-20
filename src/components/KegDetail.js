import React from "react";
import PropTypes from "prop-types";






function KegDetail(props) {
  const { keg, onClickingDelete, } = props;

  return (
<React.Fragment>
  <div class="card p-3" style={{width: "25rem"}}>
      <h2>Beer Keg Detail</h2>
      <h3>{keg.name}</h3>
      <h5>{keg.description}</h5>
      <h4>Pint available to tend: {keg.quantity}</h4>
      <img src={keg.img} alt="" />

      <div class="row">
        <div class="col">
        <button class="btn btn-success" style={{width: "10rem", marginTop: "2rem"}} onClick={ props.onClickingPurchase}>Sell a Pint</button>
        </div>
        <div class="col">
        <button class="btn btn-success" style={{width: "10rem", marginTop: "2rem"}} onClick={ props.onClickingRestock}> Refill Keg</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button class="btn btn-success" style={{width: "10rem", marginTop: "1rem"}} onClick={ props.onClickingEdit }>Update Keg</button>
        </div>
        <div class="col">
        <button class="btn btn-success" style={{width: "10rem", marginTop: "1rem"}} onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button>
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