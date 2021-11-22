import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            name="name"
            placeholder="Beer name"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            name="quantity"
            placeholder="Pints in a keg"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            name="price"
            placeholder="Price"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            name="alevel"
            placeholder="Alcohol Level"
          />
        </div>
        <br />
        <div class="form-group">
          <textarea
            class="form-control"
            name="description"
            placeholder="Description"
          />
        </div>
        <button
          class="btn btn-info"
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
