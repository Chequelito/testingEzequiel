const Manager = require("../lib/Manager")

describe("Manager", () => {
    it("", () => {
        const manager = new Manager("");

expect(manager.getName()).toEqual("Ezequiel")
expect(manager.getId()).toEqual("Ezequiel")
expect(manager.getEmail()).toEqual("Ezequiel")
expect(manager.getRoll()).toEqual("Ezequiel")
    })
})