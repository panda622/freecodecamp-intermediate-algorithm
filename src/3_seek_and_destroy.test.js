const destroyer = require("./3_seek_and_destroy.js")

test("Test case 1", () => {
  expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toIncludeAllMembers([1, 1])
})

test("Test case 2", () => {
  expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toIncludeAllMembers([1, 5, 1])
})

test("Test case 3", () => {
	expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toIncludeAllMembers([1])
})

test("Test case 4", () => {
	expect(destroyer([2, 3, 2, 3], 2, 3)).toBeArrayOfSize(0)
})

test("Test case 5", () => {
	expect(destroyer(["tree", "hamburger", 53], "tree", 53)).toIncludeAllMembers(["hamburger"])
})

test("Test case 6", () => {
	expect(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")).toIncludeAllMembers([12,92,65])
})
