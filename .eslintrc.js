module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "rules": {
      "semi": "off",
      "arrow-parens": "off",
      "comma-dangle": "off",
      "require-jsdoc": "off",
      "linebreak-style": 0,
      "operator-linebreak": "off"
  },
  "extends": ["eslint:recommended", "google"],
  "parserOptions": {
      "sourceType": "module"
  },
  "parser": "babel-eslint"
};