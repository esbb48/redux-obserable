import { ajax } from 'rxjs/ajax';

export const getListResult = () =>
  ajax.getJSON('https://api.github.com/search/users?q=github');
