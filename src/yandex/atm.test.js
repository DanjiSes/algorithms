const atm = require("./atm.js");

const nominals = [5000, 2000, 1000, 500, 100, 50];

const limitations = { 5000: 0, 2000: 3, 1000: 2, 500: 4, 100: 2, 50: 1 };

test.each([
  [
    1550,
    limitations,
    nominals,
    1550,
    { 5000: 0, 2000: 3, 1000: 1, 500: 3, 100: 2, 50: 0 },
  ],
  [
    1000000,
    limitations,
    nominals,
    "Ошибка. Не хватает купюр",
    { 5000: 0, 2000: 3, 1000: 1, 500: 3, 100: 2, 50: 0 },
  ],
  [
    999,
    limitations,
    nominals,
    "Ошибка. Не валидная сумма",
    { 5000: 0, 2000: 3, 1000: 1, 500: 3, 100: 2, 50: 0 },
  ],
  [
    1050,
    limitations,
    nominals,
    "Ошибка. Не хватает купюр",
    { 5000: 0, 2000: 3, 1000: 1, 500: 3, 100: 2, 50: 0 },
  ],
  [
    1500,
    limitations,
    nominals,
    1500,
    { 5000: 0, 2000: 3, 1000: 0, 500: 2, 100: 2, 50: 0 },
  ],
  [
    1000,
    limitations,
    nominals,
    1000,
    { 5000: 0, 2000: 3, 1000: 0, 500: 0, 100: 2, 50: 0 },
  ],
  [
    2200,
    limitations,
    nominals,
    2200,
    { 5000: 0, 2000: 2, 1000: 0, 500: 0, 100: 0, 50: 0 },
  ],
  [
    4000,
    limitations,
    nominals,
    4000,
    { 5000: 0, 2000: 0, 1000: 0, 500: 0, 100: 0, 50: 0 },
  ],
])("%s, %j, %j -> %s", (sum, limits, noms, expected, limitsres) => {
  console.log(sum);
  expect(atm(sum, limits, noms)).toStrictEqual(expected);
  expect(limits).toStrictEqual(limitsres);
});
