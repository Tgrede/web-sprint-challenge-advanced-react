import { useState } from "react";

// write your custom hook here to control your checkout form
const useForm = (initialValue) => {

     //set up initial state
     const [showSuccessMessage, setShowSuccessMessage] = useState(false);
     const [values, setValues] = useState(initialValue);

     // The changeHandler to set form values
     const handleChanges = (e) => {
          setValues({ ...values, [e.target.name]: e.target.value });
     };

     // the submitHandler to handle our form submission
     const handleSubmit = (e) => {
          e.preventDefault();
          setShowSuccessMessage(true);
     };

     //returns the form values, success message boolean, and the change handler and submit handler function 
     return [values, handleChanges, handleSubmit, showSuccessMessage]
}

export default useForm