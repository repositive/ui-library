module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:ember/recommended'],
  env: {
    browser: true
  },
  rules: {
    "padded-blocks": [
      2,
      "never"
    ],
    "key-spacing": [
      2,
      {
        "afterColon": true
      }
    ],
    "comma-style": [
      2,
      "last"
    ],
    "brace-style": [
      2,
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "no-spaced-func": 2,
    "curly": [
      2,
      "all"
    ],
    "eol-last": 2,
    "no-trailing-spaces": 2,
    "comma-dangle": [
      2,
      "never"
    ],
    "space-before-blocks": [
      2,
      "always"
    ],
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "keyword-spacing": [
      2,
      {}
    ],
    "space-infix-ops": 2
  }
};
