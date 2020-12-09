import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs/operators';
import * as authEpics from './authEpics';

const epicCollection = [authEpics];
const epics = epicCollection.reduce(
  (result, epicCollect) => [...result, ...Object.values(epicCollect)],
  []
);

const rootEpic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

export default rootEpic;
