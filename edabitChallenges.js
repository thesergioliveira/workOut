console.log("-------------exercise 1---------------");
// In mathematics, primorial, denoted by “#”, is a function from natural numbers to natural numbers similar to the factorial function, but rather than successively multiplying positive integers, the function only multiplies prime numbers.
// Create a function that takes an integer n and returns its primorial.
// Examples
// primorial(1) ➞ 2
// First prime number = 2
// primorial(2) ➞ 6
// Product of first two prime numbers = 2*3 = 6
// primorial(6) ➞ 30030
// Notes
// n >= 1.
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
console.log(primorial(6));

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

console.log("-------------exercise 3---------------");
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

console.log("-------------exercise 4---------------");
/* Write a class called Rectangle that represents a rectangular two-dimensional region. It should have the following constructor:
constructor(x, y, width, height)
Constructs a new rectangle whose top-left corner is specified by the given coordinates and with the given width and height.
It should have the following properties:
x
y
width
height
It should have the following methods:
toString()
Returns a string representation of this rectangle, as [x=1, y=2, width=3, height=4]. */


class Rectangle {
  constructor (_x= 1, _y=2, _width=3, _height=4) {
    this.x = _x;
    this.y - _y;
    this.width = _width;
    this.height = _height;
  }
  string() {
    console.log(`[x=${this.x}, y= ${this.y}, width =${this.width}, height=${this.height}]`)
     }
  
}
let recOne = new Rectangle(1, 2, 3, 4);
recOne.string();

console.log("-------------exercise 5---------------");
/* Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.
Examples
derivative(1, 4) ➞ 1
derivative(3, -2) ➞ 12
derivative(4, -3) ➞ -108
Notes
^ in the context of this challenge means "to the power of", also known as the "exponent" operator. */

function derivative(b, m) {
  n = b -1;
  return b * (m ** n);
}
console.log(derivative(3, -2));