const diffArray = require("./2_diff_two_arrays.js")

test("Test case 1", () => {
  expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toIncludeAllMembers([4])
})

test("Test case 2", () => {
  expect(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toIncludeAllMembers(["pink wool"])
})

test("Test case 3", () => {
  expect(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toIncludeAllMembers(["diorite", "pink wool"])
})
test("Test case 4", () => {
  expect(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])).toBeArrayOfSize(0)
})
test("Test case 5", () => {
  expect(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])).toIncludeAllMembers(["piglet", 4])
})
test("Test case 6", () => {
  expect(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])).toIncludeAllMembers(["snuffleupagus", "cookie monster", "elmo"])
})
test("Test case 6", () => {
  expect(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])).toIncludeAllMembers(["snuffleupagus", "cookie monster", "elmo"])
})

