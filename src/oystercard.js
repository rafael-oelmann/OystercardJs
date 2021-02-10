class Oystercard {
  constructor() {
    this.balance = 0;
    this.cardLimit = 50;
  }

  showBalance() {
    return this.balance;
  }

  topUp(amount) {
    if (this.balance + amount > this.cardLimit) {
      throw "Cannot exceed £50 limit";
    } else this.balance += amount;
  }
}

module.exports = Oystercard;
