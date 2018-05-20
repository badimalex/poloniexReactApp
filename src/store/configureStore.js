import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import APIMiddleware from '../middlewares/api';

const enhancer = compose(
  applyMiddleware(thunk, APIMiddleware)
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
