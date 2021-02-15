const Station = require("./station");

class Oystercard {
  constructor() {
    this.balance = 0;
    this.cardLimit = 50;
    this.inJourney = false;
    this.history = [];
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

  touchIn(station) {
    this.inJourney = true;
    this.history.push(
      "touched in @ " + station.name + " - zone " + station.zone
    );
  }

  touchOut(station) {
    this.inJourney = false;
    this.history.push(
      "touched out @ " + station.name + " - zone " + station.zone
    );
  }

  showHistory() {
    this.history.forEach((journey) => console.log(journey));
  }
}

module.exports = Oystercard;
