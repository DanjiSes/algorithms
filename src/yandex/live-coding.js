// Task 1

var c = 1

function fn0(c) {
  c = 2
}

fn0(c)

console.log(c) // 1

// Task 2

var obj1 = { a: 1 }

function fn1(b) {
  b.a = 5
}

fn1(obj1)

console.log(obj1) // { a: 5 } 

// -----

var obj2 = { hello: 1 }

function fn2(c) {
  c = { a: 1 }
}

fn2(obj2)

console.log(obj2) // { hello: 1 }

// Task 3

import auth from "auth"

// auth((error, data) => {})

// promiseAuth ==> Promise
function promiseAuth() {
  return new Promise((resolve, reject) => {
    auth((error, data) => {
      if (error) reject(error)
      resolve(data)
    })
  })
}

// Реализовать повторную попытку авторизации при ошибке n раз

async function tryAuth(n) {
  try {
    return await promiseAuth()
  } catch (error) {
    if (n === 0) throw error
    return tryAuth(n - 1)
  }
}


async function tryAuth(n) {
  for (let i = 0; i < n; i++) {
    try {
      return await promiseAuth()
    } catch (error) {
      if (n === 0) throw error
    }
  }
}



tryAuth(5)

// Task 4
//
// Реализовать функцию compose из ФП

function compose(...fns) {
    return function(...args) {
        return fns.reduceRight((acc, fn) => [fn(...acc)], args)[0];
    };
}


// Task 5
// 
// Отфилтровать все значения Boolean(value) === false

function filterFalsy(input) {
    if (Array.isArray(input)) {
        return input
            .map(filterFalsy) // Recursively apply filterFalsy to each element
            .filter(Boolean); // Remove falsy values
    } else if (typeof input === 'object' && input !== null) {
        return Object.entries(input)
            .reduce((acc, [key, value]) => {
                const filteredValue = filterFalsy(value); // Recursively apply filterFalsy to the value
                if (Boolean(filteredValue)) {
                    acc[key] = filteredValue; // Only add truthy values to the result
                }
                return acc;
            }, {});
    }
    return input;
}

// [null, 0, "", undefined, 1] ==> [1]
// 
// [1, [0], { a: 1, b: [ {c: "" } ]}] ==> [1, [], { a: 1, b: [ { } ] } ]
// 
// { a: 1, b: null } ==> { a: 1 }