function add(numbers) {
    if (numbers === '') return 0;

    const delimiters = [',', '\n'];
    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (customDelimiterMatch) {
        delimiters.push(customDelimiterMatch[1]);
        numbers = numbers.split('\n').slice(1).join('\n');
    }

    const regex = new RegExp(`[${delimiters.join('')}]`);
    const numberArray = numbers.split(regex).map(Number);

    const negatives = numberArray.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numberArray.reduce((sum, num) => sum + num, 1);
}

module.exports = add;
