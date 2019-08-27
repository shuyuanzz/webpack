module.exports = {
    parser: "babel-eslint",
    extends: "airbnb-base",
    rules: {
        indent: ["error", 4]
    },
    env: {
        "browser": true,
        "node": true,
    }
}