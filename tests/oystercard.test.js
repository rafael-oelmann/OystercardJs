const Oystercard = require("../src/oystercard");

describe("oystercard", () => {
  test("user can put and store money on the card", () => {
    const testOystercard = new Oystercard();
    testOystercard.topUp(10);
    expect(testOystercard.showBalance()).toEqual(10);
  });

  test("user cannot exceed 50 limit", () => {
    const testOystercard = new Oystercard();
    for (let step = 0; step < 5; step++) {
      testOystercard.topUp(10);
    }
    expect(() => testOystercard.topUp(10)).toThrow("Cannot exceed £50 limit");
  });

  test("travel fare will deduct from balance", () => {
    const testOystercard = new Oystercard();
    testOystercard.topUp(10);
    testOystercard.deductBalance(5);
    expect(testOystercard.showBalance()).toEqual(5);
  });
});
