class Oystercard {
  constructor() {
    this.balance = 0;
    this.cardLimit = 50;
    this.inJourney = false;
  }

  showBalance() {
    return this.balance;
  }

  topUp(amount) {
    if (this.balance + amount > this.cardLimit) {
      throw "Cannot exceed £50 limit";
    } else this.balance += amount;
  }

  deductBalance(fare) {
    this.balance -= fare;
  }

  touchIn() {
    this.inJourney = true;
  }

  touchOut() {
    this.inJourney = false;
  }
}

module.exports = Oystercard;
