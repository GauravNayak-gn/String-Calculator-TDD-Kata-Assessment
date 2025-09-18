class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;
    return numbers
      .split(',')
      .map(n => parseInt(n, 10))
      .reduce((a, b) => a + b, 0);
  }
}

module.exports = StringCalculator;