class Oystercard {
  constructor() {
    this.balance = 0;
  }

  showBalance() {
    return this.balance;
  }

  topUp(amount) {
    this.balance += amount;
  }
}

module.exports = Oystercard;
