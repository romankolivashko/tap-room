import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <div class="form-group">
        <input
          type='text'
          name='name'
          placeholder='Beer name' />
          </div>
          <div class="form-group">
        <input
          type='number'
          name='quantity'
          placeholder='How many in stock' />
          </div>
          <div class="form-group">
        <textarea
          name='description'
          placeholder='Description' />
          </div>
        <button type='submit'>{props.buttonText}</button>
        
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;