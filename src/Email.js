import React from "react";
import "./App.css";

export default function Email(props) {
  return (
    <div className="g-wrapper">
      <a href="mailto: clifton.baggerman@me.com">
        <div className="e-icon">
          <img id="email-img" src="email.png" alt="" />
          <p style={props.handleFontColor()}>Email</p>
        </div>
      </a>
    </div>
  );
}
