console.log("-----isFirstSuperior-------");
/* You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).
Create a function that returns whether the first array is slightly superior to that of the second.
Worked Example */
/* isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true */
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.
/* Examples
isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true
isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true
isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false
isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false */
/* Notes
Both arrays will be the same length.
All values and their counterparts will always be of the same data type.
If the two arrays are the same, return false. */

/* const isFistSuperior = array => {
    if ()

    return ;
}

console.log(isFistSuperior()); */

console.log("----ToCamelCase--------");

/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). */
//toCamelCase("The_Stealth_Warrior"); // returns "TheStealthWarrior"
//toCamelCase("the-stealth-warrior"); // returns "theStealthWarrior"

function toCamelCase(str) {
  let newStr;
  if (str == "") {
    newStr = "";
  } else if (str.includes("-")) {
    newStr = str
      .split("-")
      .map((word, i) => (i ? word[0].toUpperCase() + word.slice(1) : word))
      .join("");
  } else if (str.includes("_")) {
    newStr = str
      .split("_")
      .map((word, i) => (i ? word[0].toUpperCase() + word.slice(1) : word))
      .join("");
  }
  return newStr;
}

console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase(""));
console.log(toCamelCase("The_Stealth_Warrior"));

console.log("----getDecimal--------");
/* Write a function getDecimal(n) that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part. */

/* getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2 */

function getDecimal(n) {
  let output = [];
  let finalOutput;
  let newN = n.toString().split("").reverse();
  for (let i = 0; i < newN.length; i++) {
    let element = newN[i];
    if (element == ".") {
      break;
    } else {
      output.push(element);
    }
  }
  finalOutput = "0." + output.reverse().join("");
  return Number(finalOutput);
}
console.log(getDecimal(2.00001));

console.log("----_ArrayDiff--------");

/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b. */
/* arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3] */

const arrayDiff = (array, arr) => {
  let output = [];
  let newArrar = array.map((item) => {
    if (!arr.includes(item)) {
      output.push(item);
    }
    return output;
  });
  return output;
};
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

/* If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty. */

function wordsToMarks(string) {
  return string
    .toLowerCase()
    .split("")
    .map((item) => {
      switch (item) {
        case "a":
          item = 1;
          break;
        case "b":
          item = 2;
          break;
        case "c":
          item = 3;
          break;
        case "d":
          item = 4;
          break;
        case "e":
          item = 5;
          break;
        case "f":
          item = 6;
          break;
        case "g":
          item = 7;
          break;
        case "h":
          item = 8;
          break;
        case "i":
          item = 9;
          break;
        case "j":
          item = 10;
          break;
        case "k":
          item = 11;
          break;
        case "l":
          item = 12;
          break;
        case "m":
          item = 13;
          break;
        case "n":
          item = 14;
          break;
        case "o":
          item = 15;
          break;
        case "p":
          item = 16;
          break;
        case "q":
          item = 17;
          break;
        case "r":
          item = 18;
          break;
        case "s":
          item = 19;
          break;
        case "t":
          item = 20;
          break;
        case "u":
          item = 21;
          break;
        case "v":
          item = 22;
          break;
        case "w":
          item = 23;
          break;
        case "x":
          item = 24;
          break;
        case "y":
          item = 25;
          break;
        case "z":
          item = 26;
          break;
        default:
          return `Something went wrong!`;
          break;
      }
      return item;
    })
    .reduce((acc, item) => (acc += item));
}

console.log(wordsToMarks("attitude"));
console.log(wordsToMarks("friends"));
console.log(wordsToMarks("family"));
console.log(wordsToMarks("selfness"));
console.log(wordsToMarks("knowledge"));
