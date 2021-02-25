console.log("-------------exercise 1---------------");
function primorial(num) {
  let numbers = [];
  let finalNumbers;
  let i = 0;
  do {
    i++;
    if (i == 1 || i == 2 || i == 3 || i == 5) {
      numbers.push(i);
    } else if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % i == 0) {
      numbers.push(i);
    }
  } while (numbers.length <= num);
  finalNumbers = numbers.reduce((acc, item) => (acc *= item), 1);
  return finalNumbers;
}
console.log(primorial(2));

console.log("-------------exercise 2---------------");
// Write a function redundant that takes in a string str and returns a function that returns str.
// Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"
// const f2 = redundant("pear")
// f2() ➞ "pear"
// const f3 = redundant("")
// f3() ➞ ""
// Notes
// Your function should return a function, not a string.
function redundant(str) {
  let myFunction = () => str;
  return myFunction();
}
console.log(redundant("apple"));

console.log("-------------exercise 2---------------");
// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.

// Examples
// possibleBonus(3, 7) ➞ true

// possibleBonus(1, 9) ➞ false

// possibleBonus(5, 3) ➞ false
// Notes
// You cannot move backward (which is why example #3 doesn't work).
// If you are already on the same tile, return false, as you would be advancing away.
// Expect only positive integer inputs.

const possibleBonus =(you, friend) => {
  if (friend <= you){
    return false;
  } else if (friend - you <= 6){
    return true;
  }
  return false;
}
console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));
console.log(possibleBonus(3, 7));
console.log(possibleBonus(0, 6));
console.log(possibleBonus(1, 6));
console.log(possibleBonus(2, 6));
console.log(possibleBonus(3, 6));
console.log(possibleBonus(4, 6));
console.log(possibleBonus(5, 6)); 
console.log(possibleBonus(6, 6)); 
console.log(possibleBonus(7, 6));
console.log(possibleBonus(23, 27));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));