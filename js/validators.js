function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

function isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
    // Array.isArray(value);
}

function isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
    // Object.isObject(value);
}

function isNull(value) {
    return value === null;
}

function isUndefined(value) {
    return typeof value === 'undefined';
}

function isFunction(value) {
    return typeof value === 'function';
}

function isBoolean(value) {
    return typeof value === 'boolean';
}

function isRegExp(value) {
    return value && typeof value === 'object' && value.constructor === RegExp;
}

function isError(value) {
    return value instanceof Error && typeof value.message !== 'undefined';
}

function isDate(value) {
    return value instanceof Date;
}

function isSymbol(value) {
    return typeof value === 'symbol';
}