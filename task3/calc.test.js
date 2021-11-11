const { test, expect } = require('@jest/globals');
const calc = require('./calc');

describe('calculator', () => {
    test('should return sum of two numbers', () => {
        expect(calc.add(2,3)).toBe(5);
    });

    test('should return difference of two numbers', () => {
        expect(calc.subtract(8,4)).toBe(4);
    });

    test('should return division of two numbers', () => {
        expect(calc.divide(8,4)).toBe(2);
    });

    test('should return product of two numbers', () => {
        expect(calc.multiply(2,3)).toBe(6);
    });
});