import { CheckCircleIcon } from "@heroicons/react/solid";
import React, { useContext } from "react";
import FormContext from "../store/form-context";
import classes from "./css/Form.module.css";

function CongratzPage() {

  const {formData} = useContext(FormContext);

  return (
    <>
      <CheckCircleIcon className={classes.bigIcon}/>
      <span className={`${classes.container} ${classes.headings}`}>
        <h1>Congratulations, {formData.Fullname}!</h1>
        <p>You have appointment has booked successfully</p>
      </span>
    </>
  );
}

export default CongratzPage;
