const Intern = require ("../library/intern")

test ("Can pul school", () => {
    const testValue = "USU";
    const e = new Intern("jason",1234,"test@test.com",testValue);
    expect (e.getSchool()).toBe(testValue);
})