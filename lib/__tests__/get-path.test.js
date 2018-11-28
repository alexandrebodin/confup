const getPathInConfig = require('../get-path');

describe('getPathInConfig', () => {
  test('Throw when no config is passed', () => {
    expect(() => {
      getPathInConfig();
    }).toThrow();
  });
});
