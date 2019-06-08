import React, { Component } from 'react';
import ResultDisplay from '../ui/ResultDisplay';
import './Calculator.css';

const CalculatorOperations = {
    '÷': (prevValue, nextValue) => prevValue / nextValue,
    '-': (prevValue, nextValue) => prevValue - nextValue,
    '+': (prevValue, nextValue) => prevValue + nextValue,
    '=': (prevValue, nextValue) => nextValue
  }


class Calculator extends Component {

state = {
    value: null,
    displayValue: '0',
    operator: null,
    waitingForOperand: false
};
    
    clearAll() {
    this.setState({
        value: null,
        displayValue: '0',
        operator: null,
        waitingForOperand: false
    })
    }

    clearDisplay() {
    this.setState({
        displayValue: '0'
    })
    }
    

  render() {

    const { displayValue } = this.state;

    return (
      <div className="outer">

        <div className="calculator">
            <ResultDisplay  value={displayValue} />

            <div className="keypad">
                <div className="keys">
                    <div className="clear vh-center">clear</div>
                    <div className="numbers">
                        <div className="key vh-center">7</div>
                        <div className="key vh-center">8</div>
                        <div className="key vh-center">9</div>
                        <div className="key vh-center">4</div>
                        <div className="key vh-center">5</div>
                        <div className="key vh-center">6</div>
                        <div className="key vh-center">1</div>
                        <div className="key vh-center">2</div>
                        <div className="key vh-center">3</div>
                    </div>

                </div>
                <div className="operators">
                    <div className="operator vh-center">÷</div>
                    <div className="operator vh-center">-</div>
                    <div className="operator vh-center">+</div>
                    <div className="operator vh-center">=</div>
                </div>
            </div>
      </div>
    </div>

    )
  }
}

export default Calculator