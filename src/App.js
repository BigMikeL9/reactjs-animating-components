import React, { Component } from "react";

import "./App.css";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    isModalOpen: false,
  };

  openModalHandler = () => {
    this.setState((prevState) => {
      return {
        isModalOpen: (prevState.isModalOpen = true),
      };
    });
  };

  closeModalHandler = () => {
    this.setState((prevState) => {
      return {
        isModalOpen: (prevState.isModalOpen = false),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>

        {this.state.isModalOpen && (
          <Modal closeModal={this.closeModalHandler} />
        )}
        {this.state.isModalOpen && <Backdrop />}

        <button className="Button" onClick={this.openModalHandler}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>

        <List />
      </div>
    );
  }
}

export default App;
