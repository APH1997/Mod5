import { applyMiddleware, compose,
  createStore, combineReducers } from 'redux';

import bookReducer from './bookReducer';

const logger = require("redux-logger").default;
const composeEnhancers =
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

const rootReducer = combineReducers({
  books: bookReducer
})

export const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer)
};

export default configureStore;
