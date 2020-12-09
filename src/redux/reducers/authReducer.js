import produce from 'immer';
import types from '../actionTypes';
import { authState } from './initialState';

const authReducer = produce((state, { type, payload }) => {
  switch (type) {
    case types.GET_LIST_SUCCESS:
      state.users = payload.items;
      return;
    case types.LOGIN_SUCCESS:
      state.isAuth = true;
      state.account = payload.account;
      return;
    case types.LOGOUT_SUCCESS:
      state.isAuth = false;
      state.account = '';
      return;
    default:
      return;
  }
}, authState);

export default authReducer;
