import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewKegForm(props){
  
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.quantity.value);
    console.log(event.target.price.value);
    console.log(event.target.alevel.value);
    console.log(event.target.description.value);
    props.onNewKegCreation({name: event.target.name.value, quantity: event.target.quantity.value, description: event.target.description.value, price: event.target.price.value, alevel: event.target.alevel.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add new!" />
    </React.Fragment>
  );
}

// Add PropTypes for the new prop
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};


export default NewKegForm;