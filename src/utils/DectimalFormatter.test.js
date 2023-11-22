const DectimalFormatter = require("./DectimalFormatter");

// 123 -> 123
// 1234 -> 1 234
// 123456 -> 123 456
// 1234567 -> 1 234 567
// 1. -> 1.
// 1.1 -> 1,1
// 1,1 -> 1,1
// 1234.5 -> 1 234,5
// .1 -> 0.1
// . -> .

// .. -> .

// abc -> ""
// 123a -> 123

// 123.2. -> 123,2

new RegExp("", "gm");

const formatter1 = new DectimalFormatter({
  thousands: " ",
  decimal: ",",
  precision: 2,
});

test("Test 10000 number", () => {
  const formatted = formatter1.format(10000);
  const parsed = formatter1.parse("10 000");

  expect(formatted).toBe("10 000");
  expect(parsed).toBe(10000);
});

test("Test 10.2323 number", () => {
  const formatted = formatter1.format(10.2323);
  const parsed = formatter1.parse("10.2323");

  expect(formatted).toBe("10,23");
  expect(parsed).toBe(10.23);
});
