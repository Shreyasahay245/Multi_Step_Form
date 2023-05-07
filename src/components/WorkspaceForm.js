import React, { useContext } from "react";
import FormContext from "../store/form-context";
import classes from "./css/Form.module.css";

function WorkspaceForm() {
  const { formData, setFormData,setValidation } = useContext(FormContext);

  const insertWorkspaceName = (event) => {
    setFormData((prevData) => ({ ...prevData, WorkspaceName: event.target.value }));
    event.target.value === '' ? setValidation(prevData => ({...prevData, WorkspaceName:false})) : setValidation(prevData => ({...prevData, WorkspaceName:true}));
  };

  const insertWorkspaceURL = (event) => {
    setFormData((prevData) => ({ ...prevData, WorkspaceURL: event.target.value }));
  };

  return (
    <>
      <span className={`${classes.container} ${classes.headings}`}>
        <h1>Get your question answered by our consultants from the comfort of your home</h1>
        <p>You can always create another workspace later.</p>
      </span>

       
      <span className={classes.container}>
        <p>Food alergies</p>
        <input
          className="inputField"
          type="text"
          placeholder="Eden"
          onChange={insertWorkspaceName}
          value={formData.WorkspaceName}
        ></input>
      </span>


      <span className={classes.container}>
          <p>Food and nutritional value</p>
          <input
          className="inputField"
          type="text"
          placeholder="Food Habits"
          onChange={insertWorkspaceName}
          value={formData.WorkspaceName}
        ></input>
        


        
      </span>

      <span className={classes.container}>
          <p>Describe any past problems</p>
          <input
          className="inputField"
          type="text"
          placeholder="Describe the problem"
          onChange={insertWorkspaceName}
          value={formData.WorkspaceName}
        ></input>
        </span>


    </>
  );
}

export default WorkspaceForm;
