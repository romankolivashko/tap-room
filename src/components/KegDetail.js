import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete, } = props;



  return (
<React.Fragment>
  <div class="card p-0 overflow-hidden h-50 shadow" style={{width: "18rem"}}>
<h1>Keg Detail</h1>
<h3>{keg.name} - {keg.description}</h3>
      <p><em>{keg.quantity}</em></p>
      <img src={keg.img} alt="" />
      <button onClick={ props.onClickingPurchase}>Purchase Keg</button>
      <button onClick={ props.onClickingRestock}> Restock Keg</button>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button>
      <hr/>
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