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
  console.log(output);
  finalOutput = "0." + output.reverse().join("");
  console.log(finalOutput);
  return Number(finalOutput);
}
console.log(getDecimal(2.00001));
