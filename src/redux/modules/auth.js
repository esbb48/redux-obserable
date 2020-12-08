import { filter, mapTo } from 'rxjs/operators';

export const fetchUserEpic = action$ =>
  action$.pipe(
    filter(action => action.type === 'PING'),
    mapTo({ type: 'PONG' })
  );

const authReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case 'PING':
      return { isPinging: true };
    case 'PONG':
      return { isPinging: false };
    default:
      return state;
  }
};

export default authReducer;
