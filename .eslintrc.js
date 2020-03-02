module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "jest": true,
      "commonjs": true
  },
  "extends": [
      "airbnb",
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "react-hooks"
  ],
  "rules": {
      "no-console": "off",
      "import/extensions": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
  }
};