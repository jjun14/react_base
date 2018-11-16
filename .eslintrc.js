module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
    'prettier',
  ],
  'globals': {
    'shallow': false,
    'render': false,
    'mount': false,
    'mock': false,
    'given': false,
  },
  'plugins': [
    'prettier',
  ],
  'rules': {
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'trailingComma': 'es5'
    }],
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  }
  'settings': {
    "import/resolver": {
      "babel-plugin-root-import": {}
    }
  }
}
