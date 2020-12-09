import produce from 'immer';
import types from '../actionTypes';
import { authState } from './initialState';

const authReducer = produce((state, action) => {
  switch (action.type) {
    case types.GET_LIST_SUCCESS:
      return { ...authState, users: [{ id: 1, name: 'Alice' }] };
    default:
      return state;
  }
}, authState);

export default authReducer;
