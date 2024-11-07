const calculator = require('./calculator');

test('returns 0 for an empty string', () => {
    expect(calculator('')).toBe(0);
});

test('returns the number itself if one number is given', () => {
    expect(calculator('1')).toBe(1);
    expect(calculator('5')).toBe(5);
});

test('returns the sum of two numbers', () => {
    expect(calculator('1,2')).toBe(3);
    expect(calculator('3,5')).toBe(8);
});

test('handles multiple numbers', () => {
    expect(calculator('1,2,3,4')).toBe(10);
});

test('handles new lines between numbers', () => {
    expect(calculator('1\n2,3')).toBe(6);
});

test('supports different delimiters', () => {
    expect(calculator('//;\n1;2')).toBe(3);
    expect(calculator('//|\n1|2|3')).toBe(6);
});

test('throws an error for negative numbers', () => {
    expect(() => calculator('1,-2,3')).toThrow('Negative numbers not allowed: -2');
    expect(() => calculator('1,-2,-3')).toThrow('Negative numbers not allowed: -2, -3');
});
