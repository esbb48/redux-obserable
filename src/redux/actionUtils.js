import types from './actionTypes';

export const createAction = ACTION_KEY => payload => ({
  type: types[ACTION_KEY],
  payload,
});

export const createErrorAction = ACTION_KEY => payload => ({
  type: types[ACTION_KEY],
  payload: payload.xhr.response,
  error: true,
});
