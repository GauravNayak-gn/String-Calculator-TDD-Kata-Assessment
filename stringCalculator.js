class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;
    return numbers
      .split(/,|\n/) // regex: split by comma OR newline
      .map((n) => parseInt(n, 10))
      .reduce((a, b) => a + b, 0);
  }
}

module.exports = StringCalculator;
