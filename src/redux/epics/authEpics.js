import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import types from '../actionTypes';
import { getListResult } from '../apis';

const getListSuccess = payload => ({
  type: types.GET_LIST_SUCCESS,
  payload,
});

const getListError = payload => ({
  type: types.GET_LIST_ERROR,
  payload: payload.xhr.response,
  error: true,
});

export const fetchUsersEpic = action$ =>
  action$.pipe(
    ofType(types.GET_LIST),
    mergeMap(() =>
      getListResult().pipe(
        map(getListSuccess),
        catchError(error => of(getListError(error)))
      )
    )
  );
