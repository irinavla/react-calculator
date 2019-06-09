import * as actionTypes from './actionTypes';

export const inputDigit = (digit) => {
  return {
    type: actionTypes.INPUT_DIGIT
  }
}

export const performOperation = () => {
  return {
    type: actionTypes.PERFORM_OPERATION,

  }
}

export const handleKeyDown = (ev) => {
  return {
    type: actionTypes.KEY_DOWN
  }
}


export const clearAll = (nextOperator) => {
  return {
    type: actionTypes.CLEAR_ALL
  }
}