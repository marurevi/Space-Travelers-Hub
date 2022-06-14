import {
  applyMiddleware, combineReducers, createStore,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './rockects/rockets';

const rootReducer = combineReducers({
  rocketReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
