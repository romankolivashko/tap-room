import React from "react";
import PropTypes from "prop-types";
//import kegimg from './img/default.png'

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <h2 style={{textAlign: "center"}}>Add new beer keg</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Beer name"
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="quantity"
            placeholder="Pints in a keg"
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="price"
            placeholder="Price"
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="alevel"
            placeholder="Alcohol Level"
          />
        </div>
        <br />
        <div className="form-group">
          <textarea
            className="form-control"
            name="description"
            placeholder="Description"
          />
        </div>
        <br />
        <div className="form-group hidden">
          <textarea
            className="form-control"
            name="image"
            placeholder="Add Image"
          />
        </div>
        <button
          className="btn btn-info"
          style={{ width: "10rem", marginTop: "1rem" }}
          type="submit"
        >
          {props.buttonText}
 
        </button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
