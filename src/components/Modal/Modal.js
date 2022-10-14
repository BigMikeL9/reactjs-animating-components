import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import Transition from "react-transition-group/Transition";

import "./Modal.css";

const modal = (props) => {
  // console.log(props);

  return (
    <>
      <Transition in={props.isModalOpen} timeout={props.transitionDuration}>
        {(state) => (
          <p>
            Transition state of MODAL: <strong>{state}</strong>
          </p>
        )}
      </Transition>

      <CSSTransition
        in={props.isModalOpen}
        timeout={props.transitionDuration}
        classNames="modal" //  <--  see docs
        mountOnEnter
        unmountOnExit
      >
        <div className="modal">
          <h1>A Modal</h1>

          <button className="Button" onClick={props.closeModal}>
            Dismiss
          </button>
        </div>
      </CSSTransition>
    </>
  );
};

export default modal;
