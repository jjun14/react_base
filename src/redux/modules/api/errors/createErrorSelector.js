import { get, map, compact } from 'lodash';

const createErrorSelector = actions => state =>
  compact(map(actions, action => get(state, `api.errors.${action}`)))[0] || '';

export default createErrorSelector;
