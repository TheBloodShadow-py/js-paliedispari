"use strict;";

let reversedWord = "";

const word = prompt("Write a word: ");

isPalindromic(word);

function isPalindromic(word) {
  if (!word) {
    alert("Non puoi inserire un campo vuoto");
    return false;
  }
  if (word === getReversedString(word)) {
    alert("You entered a palindrome word");
  } else {
    alert("You did not enter a palindrome word");
  }
  return;
}

function getReversedString(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  const reversedWordArr = arr.reverse();
  for (let i = 0; i < reversedWordArr.length; i++) {
    reversedWord += reversedWordArr[i];
  }
  return reversedWord;
}
