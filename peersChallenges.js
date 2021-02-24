//Futher Exercises

console.log("----------------Exercise 1--------------------------");
//1- Create a function that can print (console.log())any parameters that you give it.
//
function print(whatever) {
  console.log(whatever);
}
print("jhvdcjhvsd");

console.log("----------------Exercise 2--------------------------");
//2- Declare a variable with the value of a sentence bigger than 5 words. Create a function that will print on the console specific words of the sentence:
//
let strBigger5 = "I am in love with Javascript";

//a- The first word;
function printSpecific(x, y) {
  console.log(strBigger5.substring(x, y));
}
printSpecific(0, 1);

//b- The last word;
printSpecific(18, 29);
//c- All the words execpt the last one;
printSpecific(0, 17);
//d- Every other word of your sentence.

console.log("----------------Exercise 3--------------------------");
//3- Declare a variable with the value of "It is niCe to pRaCtIcE my JavaScript SKILLS". Then do the following tasks:
//
let strEx3 = "It is niCe to pRaCtIcE my JavaScript SKILLS";
//a- Convert it all to upper case;
print(strEx3.toUpperCase());
//b- convert all but the first and last word to upper case;
let strEx3Middle = strEx3.substring(3, 36).toUpperCase();
print(strEx3Middle);

//c- convert only the first letter of every word to upper case;
let str = "It is niCe to pRaCtIcE my JavaScript SKILLS";
const strToUpper = () => {
  let backToStr;
  let newToArr = str.split(" ");
  console.log(newToArr);
  //for (let i = 0; i < newToArr.length; i++) {
  newToArr[2][0].toUpperCase();
  console.log(newToArr);
  //}
  //backToStr = newToArr.join(" ");
  //return `${backToStr}`;
};
//console.log(strToUpper());
strToUpper();

//d- convert all the words to lowercase.
print(strEx3.toLowerCase());

console.log("----------------Exercise 4--------------------------");
/* 4- Create a function that takes the age and return the age in days.
calcAge(65) ➞ 23725
calcAge(0) ➞ 0
calcAge(20) ➞ 7300
Notes
Use 365 days as the length of a year for this challenge.
Ignore leap years and days between last birthday and now.
Expect only positive integer inputs. */
//
function ageCalc(age) {
  var x = age;
  console.log(x * 365);
}
ageCalc(30);

console.log("----------------Exercise 5--------------------------");

/* 5- Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
wins get 3 points
draws get 1 point
losses get 0 points
footballPoints(3, 4, 2) ➞ 13
footballPoints(5, 0, 2) ➞ 15
footballPoints(0, 0, 1) ➞ 0  */
//
function calcPoints(x, y, z) {
  let w = x * 3 + y * 1 + z * 0;
  console.log(w + " points!");
}
calcPoints(5, 2, 9);

console.log("----------------Exercise 6--------------------------");
/*6-  A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement" */

const hiddenWord = (str) => {
  let text = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] == str[i].toLowerCase()) {
      text += str[i];
    } else {
    }
  }
  return `${text}`;
};

console.log(hiddenWord("cSaIFt"));
console.log(hiddenWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));
console.log(hiddenWord("JcHaKt"));

console.log("----------------Exercise 7--------------------------");

// 7- Create a program that will allow you to roll a 12-sided dice.
console.log(Math.floor(Math.random() * 12) + 1);

console.log("----------------Exercise 8--------------------------");
// 8- Create a variable with an integer as a string value. Convert the string into a number.
let intEx2 = "59";
console.log((intEx2Number = parseInt(intEx2, 10)));

console.log("----------------Exercise 9--------------------------");
// 9- Create a variable with the value "-5.067" as a string, convert it into a number.
//
let strEX3 = "-5,067";
console.log((strEx2Number = parseFloat(strEX3, 10)));

console.log("----------------Exercise 10--------------------------");
// 10- Which is the highest number from the following list of numbers?
// Show me using JS.
// a. (13, -2, 99.99, 5.01)
console.log(Math.max(13, -2, 99.99, 5.01));
// b. (-2.223, -0.5501, -1.230569, -6.003)
console.log(Math.max(-2.223, -0.5501, -1, 230569, -6, 003));
// c. (5/4, 6/7, 10/3)
console.log(Math.max(-2.223, -0.5501, -1.230569, -6.003));

console.log("----------------Exercise 11--------------------------");
// 11- Create a variable with your age as the value and a variable with your birthday.
let myAge = "I am 27 years old.";
let myBirthday = " My birthday is on the 28th of november 1993.";
// Concatenate them into a coherent sentence, introducing yourself with the variables.
console.log(`${myAge}${myBirthday}`);

console.log("----------------Exercise 12--------------------------");
//12- Round down these numbers: (-3.325, -23.89, 12.7, 199.2).
function roundDown(x) {
  console.log(Math.floor(x));
}
roundDown(-3.325);
roundDown(-23.89);
roundDown(12.7);
roundDown(199.2);

console.log("----------------Exercise 13--------------------------");
//Addition. Write a program to add up the numbers 1 to 20.

const addUp = () => {
  let i = 1;
  while (i < 20) {
    console.log(i);
    i++;
  }
  return i;
};
console.log(addUp());
console.log("----------------Exercise 14--------------------------");
// There are i bottles of beer on the wall. write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer" up until there are five bottles.

function bottles() {
  for (let i = 1; i <= 5; i++) {
    console.log(
      i == 1
        ? `There is 1 bottle of beer on the wall`
        : `There are ${i} bottle of beer on the wall`
    );
  }
  return `Well done!`;
}
console.log(bottles());

console.log("----------------Exercise 15--------------------------");
// The odd/even reporter: Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen(e.g. "2 is even").

const reporter = () => {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(`${i} is even.`);
    } else {
      console.log(`${i} is odd.`);
    }
  }
  return `Finished!`;
};
console.log(reporter());

console.log("----------------Exercise 16--------------------------");
// Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration, of the loop, it will multiply the number by 9 and log the result (e.g. "2 *9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

function multiplier() {
  for (let i = 0; i <= 9; i++) {
    console.log(` ${i} * 9 = ${i * 9}`);
  }
  return `Finished!`;
}
console.log(multiplier());

//Bonus:

function multiplierComplete() {
  for (let i = 1; i <= 10; i++) {
    console.log(`======Table of ${i} ========`);
    for (let j = 0; j <= 10; j++) {
      console.log(`${i}* ${j} = ${i * j}`);
    }
  }
  return `Finished!`;
}
console.log(multiplierComplete());

console.log("----------------Exercise 17--------------------------");
// Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five prints "Buzz". For Numbers which are multiples of both three and five "FizzBuzz".

const fizzBuzz = () => {
  let i = 1;
  do {
    console.log(
      i % 3 == 0 && i % 5 == 0
        ? `FizzBuzz`
        : i % 3 == 0
        ? `Fizz`
        : i % 5 == 0
        ? `Buzz`
        : `${i}`
    );
    i++;
  } while (i <= 100);
  return `Finished!`;
};
console.log(fizzBuzz());

console.log("----------------Exercise 18--------------------------");
// Sum of Multiples: Write a program to add the multiples of 3 and 5 under 1000.

function sumMultiples() {
  let i = 1;
  let value = 0;
  while (i <= 100) {
    if (i % 3 == 0 || i % 5 == 0) {
      value += i;
    }
    i++;
  }
  return `${value}`;
}

console.log(sumMultiples());

console.log("----------------Exercise 19--------------------------");
// Write programs that produce the following outputs:

const outputOne = () => {
  let text = "";
  for (let i = 1; i <= 10; i++) {
    text += i + "00 ";
  }
  return text;
};

console.log(outputOne());

function outputTwo() {
  let i = 0;
  let text = "";
  while (i <= 15) {
    i += 3;
    i <= 15 ? (text += i + " ") : i;
  }

  return text;
}
console.log(outputTwo());

const outputThree = () => {
  let i = 9;
  let text = "";
  do {
    text += i + " ";
    i--;
  } while (i >= 0);
  return text;
};
console.log(outputThree());

function outputFour() {
  let i = 1;
  let text = "";
  while (i <= 4) {
    let j = 1;
    while (j <= 3) {
      text += i + " ";
      j++;
    }
    i++;
  }

  return text;
}
console.log(outputFour());

const outputFive = () => {
  let text = "";
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 4; j++) {
      text += j + " ";
    }
  }
  return text;
};
console.log(outputFive());

console.log("----------------Exercise 20--------------------------");
// IsPalindrom. Write a program to check whether a word is a palindrome or not. Note: A palindrome is a word, phrase or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat.

function isPalindrome(str) {
  let text = "";
  for (let i = str.length - 1; i >= 0; i--) {
    text += str[i];
  }
  return text == str ? true : false;
}
console.log(isPalindrome("madam"));

console.log("----------------Exercise 21--------------------------");
function redundant(str) {
  let myFunction = () => str;
  return myFunction();
}
console.log(redundant("apple"));