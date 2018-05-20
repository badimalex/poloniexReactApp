/* eslint-disable no-unused-vars */

import axios from 'axios';
import { SET_LOADING } from '../actions';

const API = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : '/api';

export default store => next => action => {
  const { endpoint, type, query, ...rest } = action;

  if (!endpoint) return next(action);

  next({
    type: SET_LOADING,
    value: true
  });

  axios
    .get([API, endpoint].join(''), { params: query })
    .then(response => {
      next({ ...rest, type, response });
      next({
        type: SET_LOADING,
        value: false
      });
    });
};
