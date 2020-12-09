import types from '../actionTypes';

export const loginAction = payload => ({
  type: types.LOGIN,
  payload,
});

export const logoutAction = payload => ({
  type: types.LOGOUT,
  payload,
});

export const getList = () => ({
  type: types.GET_LIST,
});
