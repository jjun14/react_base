export default function reducer(state = {}, action = {}) {
  const { type } = action;
  const matches = /(.*)_(IN_PROGRESS|SUCCESSFUL|FAILED|NOT_CALLED)/.exec(type);

  // not a *_IN_PROGRESS / *_SUCCESSFUL / *_FAILED / *_NOT_CALLED actions, so we ignore them
  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store whether a request is happening at the moment or not
    // e.g. will be true when receiving FETCH_<RESOURCE>_IN_PROGRESS
    // and false when receiving:
    // FETCH_<RESOURCE>_SUCCESS / FETCH_<RESOURCE>_FAILED / FETCH_<RESOURCE>_NOT_CALLED
    [requestName]: requestState === 'IN_PROGRESS',
  };
}
