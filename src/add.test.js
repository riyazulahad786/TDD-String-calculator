const add = require('./add');

test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
});

test('returns the number itself if one number is given', () => {
    expect(add('1')).toBe(1);
    expect(add('5')).toBe(5);
});

test('returns the sum of two numbers', () => {
    expect(add('1,2')).toBe(3);
    expect(add('3,5')).toBe(8);
});

test('handles multiple numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
});

test('handles new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('supports different delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
    expect(add('//|\n1|2|3')).toBe(6);
});

test('throws an error for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
    expect(() => add('1,-2,-3')).toThrow('Negative numbers not allowed: -2, -3');
});
