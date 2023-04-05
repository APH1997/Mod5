import { applyMiddleware, compose,
  combineReducers, createStore } from 'redux';

import reportReducer from './reportReducer';

const logger = require("redux-logger").default;
const composeEnhancers =
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));


const rootReducer = combineReducers({
  reports: reportReducer
})

export const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer)
};

export default configureStore;
