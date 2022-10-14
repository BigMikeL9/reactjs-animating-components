import React, { Component } from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import TransitionGroup from "react-transition-group/TransitionGroup";

import "./List.css";

class List extends Component {
  state = {
    items: [1, 2, 3],
  };

  addItemHandler = () => {
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(prevState.items.length + 1),
      };
    });
  };

  removeItemHandler = (event) => {
    // console.log(event.target);
    // console.log(event.target.innerText);

    this.setState((prevState) => {
      const filteredArray = prevState.items.filter(
        (item, index, arr) => item !== +event.target.innerText
      );

      console.log(filteredArray);

      return {
        items: filteredArray,
      };
    });
  };

  render() {
    console.log(this.state);

    const listItems = this.state.items.map((item, index) => (
      // ⭐ NOTE: we dont need the 'in' prop in list items when they are wrapped with the '<TransitionGroup/>' component. The package adds it manually for us since this is a dynamic list.
      // ⭐⭐ IMPORTANT: To animate the clicked 'li' item, pass the 'item' itself to the 'key' prop in '<CSSTransition/>'
      <CSSTransition key={item} timeout={300} classNames="list__item">
        <li className="list__item" onClick={this.removeItemHandler}>
          {item}
        </li>
      </CSSTransition>
    ));

    return (
      <div>
        <button className="Button" onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <TransitionGroup component="ul" className="List">
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;
