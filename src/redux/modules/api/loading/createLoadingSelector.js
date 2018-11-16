import { get, some } from 'lodash';

const createLoadingSelector = actions => state =>
  some(actions, action => get(state, `api.loading.${action}`));

export default createLoadingSelector;
