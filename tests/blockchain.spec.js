const blockchain = require("../src/blockchain");
describe("blockchain function", () => {
test("Case 1", () => {
    expect(blockchain(1)).toBeTruthy();
  });

test("Case 2", () => {
    expect(blockchain(1)).toBeFalsy();
  });

test("Case 3", () => {
    const expected = 'expected!';
    expect(blockchain(1)).toBe(expected);
  });

});
