export default function reducer(state = {}, action = {}) {
  const { type, payload } = action;
  const matches = /(.*)_(IN_PROGRESS|FAILED)/.exec(type);

  // not a *_IN_PROGRESS / *_FAILED actions, so we ignore them
  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store whether a request is happening at the moment or not
    // e.g. will be true when receiving FETCH_<RESOURCE>_FAILED
    // and false when receiving:
    // FETCH_<RESOURCE>_IN_PROGRESS
    [requestName]: requestState === 'FAILED' ? payload.message : '',
  };
}
