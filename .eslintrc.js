module.exports = {
    root: true,
    env: {
        node: true,
    },
    parserOptions: {
        parser: "@typescript-eslint/parser",
        lib: ["esnext"],
        ecmaVersion: 2020,
        sourceType: "module",
    },
    extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    rules: {},
};
