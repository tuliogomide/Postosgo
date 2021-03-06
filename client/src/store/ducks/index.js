/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';

import authReducer from './auth';
import postosList from './posto/list/postosList';
import postoInsert from './posto/insert/postoInsert';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default history =>
  combineReducers({
    router: connectRouter(history),
    notifications,
    auth: authReducer,
    posto: combineReducers({
      list: postosList,
      insert: postoInsert
    }),
  });
