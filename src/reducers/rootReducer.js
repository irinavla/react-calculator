import * as actionTypes from '../actions/actionTypes';
import CalculatorOperations from './calculatorOperations';

const INITIAL_STATE = {
  value: null,
  displayValue: '0',
  operator: null,
  waitingForOperand: false
}

// helper function for updating the state
const updateObject = (oldObject, updadedProperties) => {
  return {
    ...oldObject,
    ...updadedProperties
  }
}

const inputDigit = (state, action) => {
  console.log('>>> INPUT DIGIT', state, action)

  const { displayValue, waitingForOperand } = state;
  let updatedState = null;

  if (waitingForOperand) {
      updatedState = {
          displayValue: String(action.digit),
          waitingForOperand: false
      }
      } else {
      updatedState = {
        displayValue: displayValue === '0' ? String(action.digit) : displayValue + action.digit
      }
  }
  return updateObject( state, updatedState );
}

const performOperation = (state, action) => {
  
  const { value, displayValue, operator } = state;
  const inputValue = parseFloat(displayValue);

  let updatedState = null;
  
  if (value == null) {
    updatedState = {
      value: inputValue,
      waitingForOperand: true,
      operator: action.operator
    }

    return updateObject(state, updatedState);

  } else if (operator) {
    const currentValue = value || 0;
    const newValue = CalculatorOperations[operator](currentValue, inputValue);

    updatedState = {
      value: newValue,
      displayValue: String(newValue),
      waitingForOperand: true,
      operator: action.operator
    }

    return updateObject(state, updatedState);
    
  }

  console.log('>>> PERFORM OPERATION', state, action)
};


const clearAll = () => {
  return INITIAL_STATE;
}


const rootReducer = (state = INITIAL_STATE, action) => {

  switch(action.type){
    case actionTypes.INPUT_DIGIT:
        return inputDigit(state, action);

    case actionTypes.PERFORM_OPERATION:
        return performOperation(state, action); 

    case actionTypes.CLEAR_ALL: 
        return clearAll();   

    default:
        return state;
}
}

export default rootReducer