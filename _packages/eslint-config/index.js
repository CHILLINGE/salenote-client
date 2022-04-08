module.exports = {
  extends: ["./rules/typescript", "./rules/prettier", "./rules/style"].map(require.resolve),
  parser: require.resolve("@typescript-eslint/parser"),
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: {},
};
