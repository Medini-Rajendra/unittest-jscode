const { test, expect } = require('@jest/globals');
const strlength = require('./strlength');

test('throw an error with numbers less than 1 and greater than 10', () => {
    expect(() => strlength('chkdjsfklsdjfsdk')).toThrow()
})