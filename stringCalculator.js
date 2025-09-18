class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;
    return numbers
      .split(/,|\n/)
      .map((n) => parseInt(n, 10))
      .filter((n) => !isNaN(n) && n <= 1000)
      .reduce((a, b) => a + b, 0);
  }
}

module.exports = StringCalculator;
