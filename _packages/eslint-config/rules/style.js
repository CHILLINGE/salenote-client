module.exports = {
  plugins: ["simple-import-sort"],
  extends: ["eslint:recommended"],
  rules: {
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "eol-last": ["error", "always"],
  },
};
