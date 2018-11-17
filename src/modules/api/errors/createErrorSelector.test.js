import createErrorSelector from './createErrorSelector';

describe('createErrorSelector', () => {
  given('state', () => ({
    api: {
      errors: {
        FETCH_DEVICE_LIST: '', // '' means no error
        FETCH_USERS: 'Something failed',
      },
    },
  }));

  test('it returns string for the non-erred selector', () => {
    expect(createErrorSelector(['FETCH_DEVICE_LIST'])(given.state)).toEqual('');
  });

  test('it returns string for the erred selector', () => {
    expect(createErrorSelector(['FETCH_USERS'])(given.state)).toEqual(
      'Something failed'
    );
  });
});
