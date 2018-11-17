const GET_RESOURCE_IN_PROGRESS = 'GET_RESOURCE_IN_PROGRESS';
const GET_RESOURCE_SUCCESS = 'GET_RESOURCE_SUCCESS';
const GET_RESOURCE_FAILED = 'GET_RESOURCE_FAILED';

export const getResourceSuccess = resources => ({
  type: GET_RESOURCE_SUCCESS,
  payload: { resources },
});

export const getResourcesInProgress = () => ({ type: GET_RESOURCE_IN_PROGRESS });
export const getResourcesFailed = () => ({ type: GET_RESOURCE_FAILED });

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RESOURCE_SUCCESS:
      return action.payload.resources;
    default:
      return state;
  }
};
