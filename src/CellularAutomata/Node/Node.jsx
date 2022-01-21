import React, { Component } from "react";

import "./Node.css";

export default class Node extends Component {
  render() {
    const { row, col, isAlive, onMouseDown, onMouseEnter, onMouseUp } =
      this.props;

    const extraClassName = isAlive ? "node-alive" : "node-dead";

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      ></div>
    );
  }
}
