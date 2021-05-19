
const Employee = require("../lib/Employee")


describe("Employee", () => {
    describe("Initialization", () => {
        it("Should describe employee attributes", () => {
            const employee = new Employee("Ezequiel", "id", "thebearginger@gmail.com");

            expect(employee.getName()).toEqual("Ezequiel")
            expect(employee.getId()).toEqual("id")
            expect(employee.getEmail()).toEqual("thebearginger@gmail.com")
            expect(employee.getRole()).toEqual("Employee")
        })
    })
});

