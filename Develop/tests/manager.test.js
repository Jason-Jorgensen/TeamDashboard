const Manager = require ("../library/manager")

test ("Can set officeNumber", () => {
    const testValue = 103;
    const e = new Manager("jason",1234,"test@test.com",testValue);
    expect (e.getOfficeNumber()).toBe(testValue);
})