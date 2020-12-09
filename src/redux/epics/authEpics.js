import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import types from '../actionTypes';
import { getListResult } from '../apis';

const getListSuccess = payload => ({
  type: types.GET_LIST_SUCCESS,
  payload,
});

export const fetchUsersEpic = action$ =>
  action$.pipe(
    ofType(types.GET_LIST),
    mergeMap(() => getListResult().pipe(map(getListSuccess)))
  );
