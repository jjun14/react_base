import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import api from './api'; // uncomment to add loading/ handling
import template from './template';

export default history =>
  combineReducers({
    router: connectRouter(history),
    template,
    // api,
  });
