const { factorial } = require('./factorial');

test('calculates the factorial of 6 to be 720', () => {
    expect(factorial(6)).toBe(720);
});