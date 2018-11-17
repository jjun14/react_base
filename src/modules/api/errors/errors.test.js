import { Reducer } from 'redux-testkit';
import errorReducer from './errors';

describe('reducer: error', () => {
  test('it has initial state', () => {
    expect(errorReducer()).toEqual({});
  });

  test('it handles *_IN_PROGRESS actions', () => {
    const action = { type: 'FETCH_TEST_IN_PROGRESS' };
    const result = { FETCH_TEST: '' };
    Reducer(errorReducer)
      .expect(action)
      .toReturnState(result);
  });

  test('it handles *_FAILED actions', () => {
    const errorString = 'some error';
    const action = {
      type: 'FETCH_TEST_FAILED',
      payload: {
        message: errorString,
      },
    };
    const result = { FETCH_TEST: errorString };
    Reducer(errorReducer)
      .withState({ FETCH_TEST: '' })
      .expect(action)
      .toReturnState(result);
  });
});
