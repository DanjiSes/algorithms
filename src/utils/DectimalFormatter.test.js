const DectimalFormatter = require("./DectimalFormatter");

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
