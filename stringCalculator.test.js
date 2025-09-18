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