import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reduMission from './missions/missions';
import rocketReducer from './rockects/rockets';

const rootReducer = combineReducers({
  reduMission,
  rocketReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
