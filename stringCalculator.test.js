const StringCalculator = require('./stringCalculator');

test('empty string returns 0', () => {
  const calc = new StringCalculator();
  expect(calc.add("")).toBe(0);
});

test('single number returns the number', () => {
  const calc = new StringCalculator();
  expect(calc.add("5")).toBe(5);
});

test('two numbers returns their sum', () => {
  const calc = new StringCalculator();
  expect(calc.add("1,2")).toBe(3);
});

test('multiple numbers returns their sum', () => {
  const calc = new StringCalculator();
  expect(calc.add("1,2,3,4")).toBe(10);
});

test('handles newlines as separators', () => {
  const calc = new StringCalculator();
  expect(calc.add("1\n2,3")).toBe(6);
});

test('ignores numbers greater than 1000', () => {
  const calc = new StringCalculator();
  expect(calc.add("2,1001")).toBe(2);
});