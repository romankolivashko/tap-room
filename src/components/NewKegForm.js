import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";
import img from '../components/img/default.png';

function NewKegForm(props){

  const IMAGE_DEFAULT = img;
  
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.quantity.value);
    console.log(event.target.price.value);
    console.log(event.target.alevel.value);
    console.log(event.target.description.value);
    console.log(event.target.image.value);
    props.onNewKegCreation({name: event.target.name.value, quantity: event.target.quantity.value, description: event.target.description.value, price: event.target.price.value, alevel: event.target.alevel.value, image: {IMAGE_DEFAULT}, id: v4()});
    console.log({IMAGE_DEFAULT});
  }

 

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add new keg!" />
    </React.Fragment>
  );
}

// Add PropTypes for the new prop
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};


export default NewKegForm;