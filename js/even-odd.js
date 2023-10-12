"use strict;";

const number = prompt("Insert a number between 1 to 5: ");

const robotNumber = getRobotNumber();

console.log(robotNumber);

function randomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

function getRobotNumber() {
  let even = false;

  if (number % 2 === 0) {
    even = true;
  }

  while (even) {
    const tempNumber = randomNumber(1, 5);
    if (tempNumber % 2 == !0) {
      return tempNumber;
    }
  }
  while (!even) {
    const tempNumber = randomNumber(1, 5);
    if (tempNumber % 2 === 0) {
      return tempNumber;
    }
  }
}
