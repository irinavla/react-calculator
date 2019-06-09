import * as actionTypes from './actionTypes';

export const inputDigit = (digit) => {
  return {
    type: actionTypes.INPUT_DIGIT,
    digit: digit
  }
}

export const performOperation = (nextOperator) => {

  return {
    type: actionTypes.PERFORM_OPERATION,
    operator: nextOperator
  }
}


export const clearAll = () => {
  return {
    type: actionTypes.CLEAR_ALL
  }
}