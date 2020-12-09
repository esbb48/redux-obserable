import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, mapTo, mergeMap } from 'rxjs/operators';
import types from '../actionTypes';
import { createAction, createErrorAction } from '../actionUtils';
import { getListResult } from '../apis';

export const getUsersEpic = action$ =>
  action$.pipe(
    ofType(types.GET_LIST),
    mergeMap(() =>
      getListResult().pipe(
        map(createAction('GET_LIST_SUCCESS')),
        catchError(error => of(createErrorAction('GET_LIST_ERROR')(error)))
      )
    )
  );

export const loginEpic = action$ =>
  action$.pipe(
    ofType(types.LOGIN),
    map(({ payload }) => createAction('LOGIN_SUCCESS')(payload))
  );

export const logoutEpic = action$ =>
  action$.pipe(ofType(types.LOGOUT), mapTo(createAction('LOGOUT_SUCCESS')()));
