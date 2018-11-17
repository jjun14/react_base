import axios from 'axios';
import {
  // import action creators here
} from 'modules/template';


function fetchResource() {
  return axios.get('http://someresource.url', {
    // params
  });
}

export default function fetchResourceThunk() {
  return dispatch => {

  };
}
