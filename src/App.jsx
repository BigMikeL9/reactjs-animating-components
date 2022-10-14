import React, { Component } from "react";

import Transition from "react-transition-group/Transition";

import "./App.css";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";

// ----------------------------------------------------------------
// Toggle Block animation used in the '<Transition>' component from the 'React Transition Group' package
const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};
// ----------------------------------------------------------------

// ------------------------------------------
class App extends Component {
  state = {
    isModalOpen: false,
    showBlock: false,
    randomColor: "",
  };

  toggleBlockHandler = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    this.setState((prevState) => {
      return {
        ...prevState,
        showBlock: !prevState.showBlock,
        randomColor,
      };
    });
  };

  openModalHandler = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isModalOpen: (prevState.isModalOpen = true),
      };
    });
  };

  closeModalHandler = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isModalOpen: (prevState.isModalOpen = false),
      };
    });
  };

  render() {
    // console.log(this.state);

    return (
      <div className="App">
        <h1>React Animations</h1>

        <div>---------------------------------------------------------</div>
        <button className="Button" onClick={this.toggleBlockHandler}>
          Toggle Block
        </button>

        {/* Transition component from 'React Transition Group' will tell React to ONLY remove the component inside it AFTER its duration/animation is done  */}
        <Transition in={this.state.showBlock} timeout={duration}>
          {(state) => (
            <p>
              Transition state of Block: <strong>{state}</strong>
            </p>
          )}
        </Transition>

        <Transition
          in={this.state.showBlock}
          timeout={duration}
          mountOnEnter // ⭐ mounts the component on 'entering' state
          unmountOnExit // ⭐ unmounts the component on 'exited' state
          onEnter={(el, isAppearing) => console.log("onEnter")}
          onEntering={(el, isAppearing) => console.log("onEntering")}
          onEntered={(el, isAppearing) => console.log("onEntered")}
          onExit={() => console.log("onExit")}
          onExiting={() => console.log("onExiting")}
          onExited={() => console.log("onExited")}
        >
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
                margin: "auto",
                height: "5rem",
                width: "5rem",
                border: "1px solid red",
                backgroundColor: `#${this.state.randomColor}`,
              }}
            />
          )}
        </Transition>
        <div>---------------------------------------------------------</div>

        {/* --------  MODAL --------  */}
        {/* 'mount' and 'unmount' of MODAL is animated through the '<CSSTransition/>' component */}
        <Modal
          closeModal={this.closeModalHandler}
          isModalOpen={this.state.isModalOpen}
          transitionDuration={duration}
        />

        {this.state.isModalOpen && <Backdrop />}

        <button className="Button" onClick={this.openModalHandler}>
          Open Modal
        </button>

        <div>---------------------------------------------------------</div>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
