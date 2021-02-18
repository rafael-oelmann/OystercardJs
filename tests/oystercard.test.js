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

  test("touching in starts journey", () => {
    const walthamstow = new Station("walthamstow", 3);
    const testOystercard = new Oystercard();
    testOystercard.topUp(10);
    testOystercard.touchIn(walthamstow);
    expect(testOystercard.inJourney).toBe(true);
  });

  test("touching out ends journey", () => {
    const walthamstow = new Station("walthamstow", 3);
    const victoria = new Station("victoria", 1);
    const testOystercard = new Oystercard();
    testOystercard.topUp(10);
    testOystercard.touchIn(walthamstow);
    testOystercard.touchOut(victoria);
    expect(testOystercard.inJourney).toBe(false);
  });

  test("showHistory returns travel history", () => {
    // would like to use mocking here
    const testOystercard = new Oystercard();
    const walthamstow = new Station("walthamstow", 3);
    const victoria = new Station("victoria", 1);

    testOystercard.topUp(10);
    testOystercard.touchIn(walthamstow);
    testOystercard.touchOut(victoria);
    // decided to test state here as I found it tricky to test console.log
    expect(testOystercard.history[0]).toBe("touched in @ walthamstow - zone 3");
    expect(testOystercard.history[1]).toBe("touched out @ victoria - zone 1");
  });

  test("penalty charge deducted if user fails to touch in", () => {
    const testOystercard = new Oystercard();
    const walthamstow = new Station("walthamstow", 3);
    testOystercard.touchOut(walthamstow);
    expect(testOystercard.showBalance()).toBe(-8);
  });

  test("cant touch in without balance < min fare", () => {
    const testOystercard = new Oystercard();
    const walthamstow = new Station("walthamstow", 3);
    expect(() => testOystercard.touchIn(walthamstow)).toThrow(
      "Not enough balance, please top up"
    );
  });

  test("the correct fare is calculated", () => {
    const testOystercard = new Oystercard();
    const walthamstow = new Station("walthamstow", 3);
    const victoria = new Station("victoria", 1);
    testOystercard.topUp(10);
    testOystercard.touchIn(walthamstow);
    expect(testOystercard.showBalance()).toBe(8);
    testOystercard.touchOut(victoria);
    expect(testOystercard.showBalance()).toBe(4);
  });
});
