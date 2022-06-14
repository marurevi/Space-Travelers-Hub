import {
  applyMiddleware, combineReducers, createStore,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './rockects/rockets';

const reducers = combineReducers({
  rockets: rocketReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
