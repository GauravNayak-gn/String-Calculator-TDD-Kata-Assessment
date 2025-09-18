class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;

    const parts = numbers.split(',');
    if (parts.length === 1) return parseInt(parts[0], 10);

    return parts.map(n => parseInt(n, 10)).reduce((a, b) => a + b, 0);
  }
}
module.exports = StringCalculator;