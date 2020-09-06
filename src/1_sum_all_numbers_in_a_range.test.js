const sumAll = require("./1_sum_all_numbers_in_a_range.js")
test("Sum all numbers in a range", () => {
  expect(sumAll([1, 4])).toBe(10)
})

test("Sum all numbers in a range", () => {
  expect(sumAll([4, 1])).toBe(10)
})

test("Sum all numbers in a range", () => {
  expect(sumAll([5, 10])).toBe(45)
})
test("Sum all numbers in a range", () => {
  expect(sumAll([10, 5])).toBe(45)
})

