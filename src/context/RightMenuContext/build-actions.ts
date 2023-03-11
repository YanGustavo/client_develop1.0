import * as actionTypes from './action-types';

export const buildActions = (dispatch) => {
  return {
      home: () => dispatch({ type: actionTypes.SET_HOME }),
      order: () => dispatch({ type: actionTypes.SET_ORDER }),
      reset: () => dispatch({ type: actionTypes.SET_RESET }),
  };
};