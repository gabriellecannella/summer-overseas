import React from "react";
import "../../App.css";
import { Button_SignUp } from "../Button_SignUp.js";
import "./SignUp_page.css";

export default function SignUp() {
  return (
    <>
      <div className="sign-up">
        <h1>SIGN UP</h1>
        <br></br>
        <div className="button-container">
          <Button_SignUp
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            APPLY NOW
          </Button_SignUp>
        </div>
      </div>
    </>
  );
}
