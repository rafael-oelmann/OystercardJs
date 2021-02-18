const Station = require("./station");

class Oystercard {
  constructor() {
    this.balance = 0;
    this.cardLimit = 50;
    this.inJourney = false;
    this.history = [];
    this.minFare = 2;
    this.touchOutFare = 4;
    this.penFare = 8;
  }

  showBalance() {
    return this.balance;
  }

  topUp(amount) {
    if (this.balance + amount > this.cardLimit) {
      throw "Cannot exceed £50 limit";
    } else this.balance += amount;
  }

  touchIn(station) {
    if (this.minFare > this.balance) {
      throw "Not enough balance, please top up";
    } else {
      this.balance -= this.minFare;
      this.inJourney = true;
      this.history.push(
        "touched in @ " + station.name + " - zone " + station.zone
      );
    }
  }

  touchOut(station) {
    if (this.inJourney == false) {
      this.balance -= this.penFare;
    } else {
      this.balance -= this.touchOutFare;
      this.balance -= this.inJourney = false;
      this.history.push(
        "touched out @ " + station.name + " - zone " + station.zone
      );
    }
  }

  showHistory() {
    this.history.forEach((journey) => console.log(journey));
  }
}

module.exports = Oystercard;
