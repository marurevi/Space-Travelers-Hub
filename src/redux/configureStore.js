import {
  applyMiddleware, combineReducers, createStore,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rockets from './rockects/rockets';

const rootReducer = combineReducers({
  rockets,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
