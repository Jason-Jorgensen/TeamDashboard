const Engineer = require ("../library/engineer");


test ("can set name using extend",() => {
    const testValue = "Jason";
    const e = new Engineer(testValue);
    expect (e.name).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Engineer (testValue);
    expect(e.getName()).toBe(testValue);
  });

test ("Can set Github account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Alice","100","test@test.com",testValue);
    expect (e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
  });