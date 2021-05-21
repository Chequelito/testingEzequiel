const Intern = require("../lib/Intern")

describe("Intern", () => {
    it("", () => {
        const intern = new Intern("");

expect(intern.getName()).toEqual("Ezequiel")
expect(intern.getId()).toEqual("Ezequiel")
expect(intern.getEmail()).toEqual("Ezequiel")
expect(intern.getRoll()).toEqual("Ezequiel")
    })
})