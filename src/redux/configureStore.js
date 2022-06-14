import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reduMission from './missions/missions';

const rootReducer = combineReducers({
  reduMission,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
