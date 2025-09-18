const StringCalculator = require('./stringCalculator');

test('empty string returns 0', () => {
  const calc = new StringCalculator();
  expect(calc.add("")).toBe(0);
});