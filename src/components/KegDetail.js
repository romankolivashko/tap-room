import React from "react";
import PropTypes from "prop-types";



function KegDetail(props) {
  const { keg, onClickingDelete, } = props;

  return (
<React.Fragment>
<h2 style={{fontFamily: "Gunplay", textAlign: "center", color: "#F4C7A9"}}>Keg Details</h2>
        <br />
  <div className="card p-4 m-3 border border-danger" style={{width: "25rem", color: "#F4C7A9"}}>
      <h3>Name: {keg.name}</h3>
      <h3>Price: {keg.price}</h3>
      <h4>Alc.: {keg.alevel}</h4>
      <h5>{keg.description}</h5>
      <br />
      <img className="card-img-top" src={keg.img} alt="" />
      <br />
      <h3 style={{textAlign: "center"}}>Pints left in  a keg: {keg.quantity}</h3>

      <div className="row">
        <div className="col">
        <button className="btn btn-success" style={{width: "10rem", marginTop: "2rem", color: "#84f9c1"}} onClick={ props.onClickingPurchase}>Sell a Pint</button>
        </div>
        <div className="col">
        <button className="btn btn-success" style={{width: "10rem", marginTop: "2rem", color: "#84f9c1"}} onClick={ props.onClickingRestock}> Refill Keg</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-success" style={{width: "10rem", marginTop: "1rem", color: "#84f9c1"}} onClick={ props.onClickingEdit }>Update Keg</button>
        </div>
        <div className="col">
        <button className="btn btn-success" style={{width: "10rem", marginTop: "1rem", color: "#84f9c1"}} onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button>
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