import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './missions/missions';

const reduMission = reducer;

const store = createStore(
  reduMission,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;
