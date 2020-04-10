module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  "plugins": ["svelte3"],
  "extends": [
    "eslint:recommended"
  ],
  // "ignorePatterns": ["node_modules/", "src/index.js"],
  "overrides": [
    {
      "files": ["**/*.svelte"],
      "processor": "svelte3/svelte3"
    }
  ],
  "rules": {
    
  }
};
