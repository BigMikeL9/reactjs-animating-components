import React from "react";

import "./Modal.css";

const modal = (props) => {
  console.log(props.transitionState);

  const classes = `Modal ${
    props.transitionState === "entering" ? "showModal" : ""
  }${props.transitionState === "exiting" ? "hideModal" : ""}`;

  return (
    <div className={classes}>
      <h1>A Modal</h1>

      <button className="Button" onClick={props.closeModal}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
