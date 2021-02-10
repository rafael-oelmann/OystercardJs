const Oystercard = require("../src/oystercard");

describe("oystercard", () => {
  test("user can put and store money on the card", () => {
    const testOystercard = new Oystercard();
    testOystercard.topUp(10);
    expect(testOystercard.showBalance()).toEqual(10);
  });
});
