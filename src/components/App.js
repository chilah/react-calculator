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
    this.setState(state => {
      return {
        displayValue: state.displayValue.length > 1 ? state.displayValue.slice(0, -1) : "",
        prevValue: state.displayValue.length > 1 ? state.prevValue.slice(0, -1) : "",
        isOperator: false,
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
