const removeInvalidParentheses = require("./remove-invalid-parentheses");

test.each([
  ["()())()", ["(())()", "()()()"]],
  ["(a)())()", ["(a())()", "(a)()()"]],
  [")(", [""]],
  ["())", ["()"]],
  ["(())", ["(())"]],
  ["()())", ["(())", "()()"]],
  ['())))', ['()']],
  ['())', ['()']],
])("%s -> %s", (str, expected) => {
  expect(removeInvalidParentheses(str)).toStrictEqual(expected);
});




