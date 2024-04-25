const { factorial } = require("./factorial");

describe("factorial function", () => {
  test("calculates the factorial of 0 to be 1", () => {
    expect(factorial(0)).toBe(1);
  });

  test("calculates the factorial of 1 to be 1", () => {
    expect(factorial(1)).toBe(1);
  });

  test("calculates the factorial of 6 to be 720", () => {
    expect(factorial(6)).toBe(720);
  });
});
