"use strict;";

const number = prompt("Insert a number between 1 to 5: ");

const robotNumber = getRobotNumber();

getWinner();

console.log("Player number: ", number);
console.log("Robot number: ", robotNumber);

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

function getWinner() {
  if (!number || !robotNumber) {
    alert("You have to write a number!");
  } else {
    if (number + (robotNumber % 2) === 0) {
      if (number % 2 === 0) {
        alert("Player won (even)");
        return;
      } else {
        alert("Robot won (even)");
        return;
      }
    } else {
      if (number % 2 == !0) {
        alert("Player won (odd)");
        return;
      } else {
        alert("Robot won (odd)");
        return;
      }
    }
  }
}
