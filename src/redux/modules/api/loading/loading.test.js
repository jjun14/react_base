import { Reducer } from 'redux-testkit';
import loadingReducer from './loading';

describe('reducer: loading', () => {
  test('it has initial state', () => {
    expect(loadingReducer()).toEqual({});
  });

  test('it handles *_IN_PROGRESS actions', () => {
    const action = { type: 'FETCH_TEST_IN_PROGRESS' };
    const result = { FETCH_TEST: true };
    Reducer(loadingReducer)
      .expect(action)
      .toReturnState(result);
  });

  ['SUCCESSFUL', 'FAILED', 'NOT_CALLED'].forEach(type => {
    test(`it handles *_${type} actions`, () => {
      const action = { type: `FETCH_TEST_${type}` };
      const result = { FETCH_TEST: false };
      Reducer(loadingReducer)
        .withState({ FETCH_TEST: true })
        .expect(action)
        .toReturnState(result);
    });
  });
});
