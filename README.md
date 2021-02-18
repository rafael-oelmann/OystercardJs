# OystercardJs 🚈

## Intro

Here is a Nodejs remake of the Oystercard Challenge from Week 2 of my software engineering bootcamp at Makers Academy.

The program emulates a the functionality of a typical Oystercard (a travel card used to access the London Underground). It was written using TDD (test driven development) with Jest as the chosen testing framework.

## Installation

1. Clone or fork this repo.
2. If you do not already have [Node](https://nodejs.org/en/ "Nodes's Homepage"), install it from thier homepage.
3. From the project root directory, run: ~ npm install.
4. From the root directory, you should now be able to run test using Jest with: `~ npm test`.

## Running the program

In the project root directory run: ~node
This will start the node REPL where we can begin to input commands.

start by requiring the classes that we are going to use. In our case we will need an Oystercad and a couple of Station's:

```
> const Oystercard = require('./src/oystercard')

> const Station = require('./src/station')
```

We then instantiate the classes (feel free to choose your own variable names), in this instance we will create 1 Oystercard and 2 Stations’s pertaining to different travel zones:

```
> const testOystercard = new Oystercard();

> const walthamstow = new Station("walthamstow", 3);

> const victoria = new Station("victoria", 1);
```

Let's top up our Oystercard!

```
> testOystercard.topUp(10);

> testOystercard.showBalance()
> 10
```

To start our journey we touchIn to our first station (passing the station instance as an argument), to end the journey we touchOut in a similar way.

```
> testOystercard.touchIn(walthamstow);

> testOystercard.touchOut(victoria);
```

In order to know where we have been, we use the showHistory method on our Oystercard.

```
> testOystercard.showHistory();
// touched in @ walthamstow - zone 3
// touched out @ victoria - zone 1
```

Feel free to experiment with the program, try touching in without any balance or see what happens when you only touch out!

## Class Diagram (Oystercard & Station)

![image of a class diagram.](/images/classDiagram.png "image of a class diagram.")

## Users Stories

The following users stories were used to guide the development of the program.

```
In order to use public transport
As a customer
I want money on my card

In order to keep using public transport
As a customer
I want to add money to my card

In order to protect my money
As a customer
I don't want to put too much money on my card

In order to pay for my journey
As a customer
I need my fare deducted from my card

In order to get through the barriers
As a customer
I need to touch in and out

In order to pay for my journey
As a customer
I need to have the minimum amount for a single journey

In order to pay for my journey
As a customer
I need to pay for my journey when it's complete

In order to pay for my journey
As a customer
I need to know where I've travelled from

In order to know where I have been
As a customer
I want to see to all my previous trips

In order to know how far I have travelled
As a customer
I want to know what zone a station is in

In order to be charged correctly
As a customer
I need a penalty charge deducted if I fail to touch in or out

In order to be charged the correct amount
As a customer
I need to have the correct fare calculated
```
