import React, { useContext } from "react";
import FormContext from "../store/form-context";
import classes from "./css/Form.module.css";

function UserNameForm() {
  const {setFormData, formData, setValidation} = useContext(FormContext);


  const fullNameHandler = (event)=> {
    setFormData(prevData => ({...prevData, Fullname:event.target.value}));
    event.target.value === '' ? setValidation(prevData => ({...prevData, Fullname:false})) : setValidation(prevData => (({...prevData, Fullname:true})));
  }


  const displayNameHandler = (event) => {
    setFormData(prevData => ({...prevData, DisplayName:event.target.value}));
    event.target.value === '' ? setValidation(prevData => ({...prevData, DisplayName:false})) : setValidation(prevData => ({...prevData, DisplayName:true}));
  }



  return (
    <>

      <span className={`${classes.container} ${classes.headings}`}>
        <h1>Get your question answered by our consultants from the comfort of your home...</h1>
       
      </span>
      

      <span className={classes.container}>
        <p>Child Name</p>
        <input className="inputField" type="text" placeholder="Steve Jobs" onChange={fullNameHandler} value={formData.Fullname} />
      </span>

      <span className={classes.container}>
        <p>Child's date of birth</p>
        <input className="inputField" type="date" placeholder="Steve Jobs" onChange={fullNameHandler} value={formData.Fullname} />
      </span>
     
      <span className={classes.container}>
        <p>Born at less than 37 weeks</p>
        <input className="inputField" type="radio" name="yes_no" checked onChange={fullNameHandler} value={formData.Fullname} />
        <label>yes</label>
        <input className="inputField" type="radio" name="yes_no" checked onChange={fullNameHandler} value={formData.Fullname} />
        <label>no</label>
      </span>

      <span className={classes.container}>
        <p>Child's weight</p> 
        <input className="inputField" type="number" Change={displayNameHandler} value={formData.DisplayName} />
      </span>
      <p>Weight unit</p>
      <input className="inputField" type="number" Change={displayNameHandler} value={formData.DisplayName} /> 

      <span className={classes.container}>
        <p>Child's height</p> 
        <input className="inputField" type="number" Change={displayNameHandler} value={formData.DisplayName} />
      </span>
      <p>Height unit</p>
      <input className="inputField" type="number" Change={displayNameHandler} value={formData.DisplayName} /> 

      <span className={classes.container}>
        <p>Email address</p>
        <input className="inputField" type="email" placeholder="xyz@example.com" onChange={fullNameHandler} value={formData.Fullname} />
      </span>
      <span className={classes.container}>
      <p>Phone Number:</p>
     <input type="tel" class="phone-input" name="phone" onChange={fullNameHandler} value={formData.Fullname} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
      </span>
        
    </>
  );
}

export default UserNameForm;
