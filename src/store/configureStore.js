import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const isDev = process.env.NODE_ENV !== 'production';

const enhancers = middlewares => (isDev
  ? composeEnhancers(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares));

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    enhancers([thunk]),
  );
}
