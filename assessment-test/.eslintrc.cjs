module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: ["plugin:vue/recommended", "plugin:prettier/recommended"],
    rules: {
        "prettier/prettier": "error",
    },

    parserOptions: {
        parser: "@babel/eslint-parser",
        requireConfigFile: false,
    },
};
