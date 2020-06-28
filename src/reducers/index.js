import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

export default combineReducers({
  //here log is state
  log: logReducer,
  tech: techReducer,
});
