import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div className="outer">

        <div className="calculator">
        <div className="keypad">
          <div className="function-keys">
            <div className="clear">clear</div>

          <div className="digit-keys">
            <div className="key key--digit"> 1, 2, 3, 4 </div>
          </div>

          </div>

          <div className="operator-keys">
            <div className="key key--operator">+ , - , =</div>
          </div>



        </div>
      </div>
    </div>

    )
  }
}

export default Calculator