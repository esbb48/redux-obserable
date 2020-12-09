import { authState } from './initialState';
import types from '../actionTypes';

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case types.GET_LIST_SUCCESS:
      return { ...authState, users: [{ id: 1, name: 'Alice' }] };
    default:
      return state;
  }
};

export default authReducer;
