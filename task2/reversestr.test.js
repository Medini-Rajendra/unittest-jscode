const { test, expect } = require('@jest/globals');
const reversestr = require('./reversestr');

test('return reverse for a given string', () => {
    expect(reversestr('chkdj')).toBe('jdkhc')
})