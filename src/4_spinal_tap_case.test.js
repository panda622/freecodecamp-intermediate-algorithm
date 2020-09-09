
const spinalCase = require("./4_spinal_tap_case.js")

test("Test case 1", () => {
  expect(spinalCase("This Is Spinal Tap")).toBe("this-is-spinal-tap")
})

test("Test case 2", () => {
  expect(spinalCase("thisIsSpinalTap")).toBe("this-is-spinal-tap")
})

test("Test case 3", () => {
	expect(spinalCase("The_Andy_Griffith_Show")).toBe("the-andy-griffith-show")
})

test("Test case 4", () => { expect(spinalCase("Teletubbies say Eh-oh")).toBe("teletubbies-say-eh-oh") })

test("Test case 5", () => { expect(spinalCase("AllThe-small Things")).toBe("all-the-small-things") })
