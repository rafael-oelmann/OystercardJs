const Oystercard = require("../src/oystercard");
const Station = require("../src/station");

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

  test("touching in starts journey", () => {
    const testOystercard = new Oystercard();
    testOystercard.topUp(10);
    testOystercard.touchIn();
    expect(testOystercard.inJourney).toBe(true);
  });

  test("touching out starts journey", () => {
    const testOystercard = new Oystercard();
    testOystercard.topUp(10);
    testOystercard.touchIn();
    testOystercard.touchOut();
    expect(testOystercard.inJourney).toBe(false);
  });

  test("showHistory returns travel history", () => {
    const testOystercard = new Oystercard();
    const walthamstow = new Station("walthamstow", 3);
    const victoria = new Station("victoria", 1);

    testOystercard.topUp(10);
    testOystercard.touchIn(walthamstow);
    testOystercard.touchOut(victoria);
    expect(
      testOystercard
        .showHiistory()
        .toEqual(
          "touch in @ walthamstow - zone 3, touch out @ victoria - zone 1"
        )
    );
  });
});
