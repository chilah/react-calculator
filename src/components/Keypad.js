import React, { Component } from "react";
import "./style/Keypad.css";

export class Keypad extends Component {
  render() {
    return (
      <div className="keypad">
        <button
          name="clear"
          onClick={this.props.clearValue}
          className="btn btn-danger btn-lg clear__btn"
        >
          C
        </button>
        <button
          name="delete"
          onClick={this.props.deleteValue}
          className="btn btn-danger btn-lg delete__btn"
        >
          DEL
        </button>
        <button
          name="7"
          onClick={this.props.inputValue}
          className="btn btn-dark btn-lg"
        >
          7
        </button>
        <button
          name="8"
          onClick={this.props.inputValue}
          className="btn btn-dark btn-lg"
        >
          8
        </button>
        <button
          name="9"
          onClick={this.props.inputValue}
          className="btn btn-dark btn-lg"
        >
          9
        </button>
        <button
          name="/"
          onClick={this.props.inputOperator}
          className="btn btn-primary btn-lg"
        >
          /
        </button>
        <button
          name="4"
          onClick={this.props.inputValue}
          className="btn btn-dark btn-lg"
        >
          4
        </button>
        <button
          name="5"
          onClick={this.props.inputValue}
          className="btn btn-dark btn-lg"
        >
          5
        </button>
        <button
          name="6"
          onClick={this.props.inputValue}
          className="btn btn-dark btn-lg"
        >
          6
        </button>
        <button
          name="*"
          onClick={this.props.inputOperator}
          className="btn btn-primary btn-lg"
        >
          *
        </button>
        <button
          name="1"
          onClick={this.props.inputValue}
          className="btn btn-dark btn-lg"
        >
          1
        </button>
        <button
          name="2"
          onClick={this.props.inputValue}
          className="btn btn-dark btn-lg"
        >
          2
        </button>

        <button
          name="3"
          onClick={this.props.inputValue}
          className="btn btn-dark btn-lg"
        >
          3
        </button>
        <button
          name="+"
          onClick={this.props.inputOperator}
          className="btn btn-primary btn-lg"
        >
          +
        </button>
        <button name="." onClick={this.props.inputDecimal} className="btn btn-dark btn-lg">
          .
        </button>
        <button
          name="0"
          onClick={this.props.inputValue}
          className="btn btn-dark btn-lg"
        >
          0
        </button>
        <button
          name="="
          onClick={this.props.calculate}
          className="btn btn-warning btn-lg"
        >
          =
        </button>
        <button
          name="-"
          onClick={this.props.inputOperator}
          className="btn btn-primary btn-lg"
        >
          -
        </button>
      </div>
    );
  }
}

export default Keypad;
