const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    it("Should return engineer properties", () => {
        const engineer = new Engineer("");

expect(engineer.getName()).toEqual("Ezequiel")
expect(engineer.getId()).toEqual("Ezequiel")
expect(engineer.getEmail()).toEqual("Ezequiel")
expect(engineer.getRoll()).toEqual("Ezequiel")
    })
})