module.exports = {
  root: true,

  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },

  env: {
    browser: true
  },

  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    "@vue/standard"
  ],

  // required to lint *.vue files
  plugins: ["vue"],

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
    chrome: true
  },

  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow paren-less arrow functions
    "arrow-parens": "off",
    "arrow-spacing": ["warn", { "before": true, "after": true }],
    "one-var": ["off"],
    "import/first": "off",
    "import/named": "error",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "prefer-promise-reject-errors": "off",
    quotes: ["error", "single"],
    "no-var": "error",
    "no-duplicate-imports": "error",
    "sort-imports": "error",
    semi: ["error", "always"],
    "comma": "",
    "rest-spread-spacing": ["error", "never"],
    // allow debugger during development only
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
