module.exports = {
    "root": true,
    "extends":["vue"],
    "globals": {
        "require": true,
        "console": true,
        "window": true,
        "document": true,
        "process": true,
        "Promise": true
    },
    "evn": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    }
}
