import createLoadingSelector from './createLoadingSelector';

describe('createLoadingSelector', () => {
  given('state', () => ({
    api: {
      loading: {
        FETCH_USERS: true,
        FETCH_PETS: true,
        FETCH_FOODS: false,
      },
    },
  }));

  test('it returns true if the selector value is true', () => {
    expect(createLoadingSelector(['FETCH_USERS'])(given.state)).toEqual(true);
  });

  test('it returns true when all selector values are true', () => {
    expect(
      createLoadingSelector(['FETCH_USERS', 'FETCH_PETS'])(given.state)
    ).toEqual(true);
  });

  test('it returns true when if some selector values are true', () => {
    expect(
      createLoadingSelector(['FETCH_USERS', 'FETCH_FOODS'])(given.state)
    ).toEqual(true);
  });

  test('it returns false if the selector value is false', () => {
    expect(createLoadingSelector(['FETCH_FOODS'])(given.state)).toEqual(false);
  });
});
