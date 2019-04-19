import React, { Component } from "react";
import Keypad from "./Keypad";
import "./style/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: "",
      prevValue: "",
      isOperator: false,
      error: false
    };
  }

  inputValue = e => {
    const { name } = e.target;

    if (this.state.isOperator) {
      this.setState(state => {
        return {
          displayValue: name,
          prevValue: state.prevValue + name,
          isOperator: false
        };
      });
    } else {
      this.setState(state => {
        return {
          displayValue: state.displayValue + name,
          prevValue: state.prevValue + name
        };
      });
    }
  };

  inputOperator = e => {
    const { name } = e.target;

    if (this.state.displayValue !== "" && !this.state.isOperator) {
      this.setState(state => {
        return {
          displayValue: name,
          prevValue: state.prevValue + name,
          isOperator: true
        };
      });
    }

    if (this.state.isOperator) {
      this.setState(state => {
        return {
          displayValue: name,
          prevValue: state.prevValue.slice(0, -1) + name,
        }
      })
    }
  };

  calculate = () => {
    const calc = eval(this.state.prevValue);

    this.setState(state => {
      return {
        displayValue: String(calc),
        prevValue: String(calc)
      };
    });
  };

  deleteValue = () => {
    const { displayValue } = this.state;
    const num = displayValue.length > 1 ? displayValue.slice(0, -1) : "";

    this.setState(state => {
      return {
        displayValue: num
      };
    });
  };

  clearValue = () => {
    this.setState(state => {
      return {
        displayValue: "",
        prevValue: "",
        isOperator: false
      };
    });
  };

  render() {
    return (
      <div>
        <div className="display">
          {this.state.error && <h3>Please fill the completely digit</h3>}
          <h5 className="display--prevValue">
            {this.state.prevValue ? this.state.prevValue : "0"}
          </h5>
          <h1>{this.state.displayValue ? this.state.displayValue : "0"}</h1>
        </div>
        <Keypad
          inputValue={this.inputValue}
          inputOperator={this.inputOperator}
          calculate={this.calculate}
          deleteValue={this.deleteValue}
          clearValue={this.clearValue}
        />
      </div>
    );
  }
}

export default App;
