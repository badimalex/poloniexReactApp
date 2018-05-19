import { createStore, applyMiddleware, compose } from 'redux';

import axios from 'axios';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api'
});

const enhancer = compose(
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
