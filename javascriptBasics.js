let bool = " ";
bool ? console.log("cool") : console.log("not cool");

let str = "Hadi";
console.log(str[str.lenght - 1]);

/* let LongStr = "    Hi I am hadi";
console.log(longStr.trim( )); */

function display(str) {
  console.log(str);
}

display("zain");

let y = 3;
let w = 44;

// + - *
console.log(y % w);
// (123) (23,4)

let int1 = "111";
let int2 = 1.7;
console.log(int1 + " " + int2);

// isNaN
isNaN(int1)
  ? console.log("Yeah it's not a  number")
  : console.log("Nope sorry");
let newNum = parseInt(int1, 10);
console.log(newNum);
intSum = newNum + int2;
console.log(intSum);

let newFloat = parseFloat(int2);
console.log(newFloat);

// * + - /
let a = 3;
let b = 2;
let sum1 = a + b;
let div = a / b;
let mul = a * b;
let sub = a - b;
console.log(sum1, div, mul, sub);

// ++ --

++a;
b--;
// **
let power = 2 ** 2;
console.log(power);

//Math.floor
//3.33
let float1 = 1.8;
let realInt = Math.floor(float1);
console.log(realInt);

//Math Ceil
let realInt2 = Math.ceil(float1);
console.log(realInt2);

//Math.max()
console.log(Math.max(2, 33, 434, 123211, -212));
//Math.min()
console.log(Math.min(2, 33, 434, 123211, -212));
//Printing out a string
console.log("Hadi");
console.log("I love Berlin");
//Mathematical expressions: +, -, *, /, %
console.log(1 + 1);
console.log(1 * 4);
//Boolean expressions: comparison operators (===, !==, >=, <=, >, <)
console.log(12 == 2);
console.log(4);

// declaring variables
// let varName = varValue
// string value
var name = "Hadi";
// boolean value
let boo = 1 < 3;
console.log(boo);
// number value
let sum = 22 + 2;
console.log(sum);
console.log(name);
let bb = 44;
let add = "Berlin, 12334 💪";
console.log(add);
let x = 55;
console.log(x);
x = 3;
console.log(x);
let age;
console.log(age);
console.log(bb);
age = 31;
console.log(age, bb);
// typeof
console.log(typeof x);
console.log(typeof add);
console.log(typeof name);
console.log(typeof bb);
let y = 3.33333;
let z = 34.435;
let sumNum = y + z;
console.log(y + z);
let str1 = "Hi";
let str2 = " I am";
let strSum = str1 + str2;
console.log(str1 + str2);
console.log(typeof strSum);

let add2, age2, name2;
add2 = "something";
// Ternary operator
// ternary condition ? execute only if the condition was truthy : execute only if the condition was faulty
let person = 21;
console.log(person > 16);
person > 16 ? console.log("Go Party 😎 ") : console.log("Stay home 🤨");
let drive = 18;
drive >= 18
  ? console.log("Yeah let's drive now 💪🏻 ")
  : console.log("Nope sorry");
// comparison operators (===, !==, >=, <=, >, <)
console.log(1 == 1);
let num1 = 1;
let num2 = "1";
console.log(num1 === num2);
//
let userName = "Hadi";
console.log(typeof userName);
console.log(userName.length);
console.log(add2.length);
console.log(userName[2]);
let string = "Hi my Name is Hadi";
// "012345678"
// "h****@gmail.com"
let email = "hadi@gmail";
console.log(email[5]);
//"@had.com"
email[4] == "@"
  ? console.log("Enter a valid email add")
  : console.log("this is a nice start for an email add");

//Printing out a script
console.log("Sergio");
console.log("I love Dresden");

//Mathematical expressions: +, -, *, /, %
console.log(1 + 1);
console.log(1 * 4);

//Boolean expressions: comparison operarators: ==, !==, >=, <=, <, >)
console.log(12 == 2);

// nodemon index.js is a command so that I can use a terminal as a running file on node.js
//String: text
//Boolean: For booleans we need to use a comparison operator
//Integers: Number that do not have decimal value

console.log("Sergio");

//Creating a variable and printing
let x = 3;
console.log(x);
var name = "sergio";
let boo = 1 < 3;
console.log(boo);

//Change a variable and print new value
x = 7;
console.log(x);

//Javascript is a single threaded language

//New method: Printing on the console the type of a variable
console.log(typeof x);
console.log(typeof boo);

//Combining two variable:
let y = 3;
let z = 34;
let sumNum = y + z;
console.log(sumNum);
let str1 = "Hello";
let str2 = " World!";
let sumStr = str1 + str2;
console.log(sumStr);

//Printing the typeof a combination of variables
console.log(typeof sumStr);

//Declaring multiple variables
let add2, age, name2;
add2 = "something";

//Ternary operator
let person = 12;

person > 16 ? console.log("Go party!") : console.log("Stay Home :(");

//Example2

let driver = 55;

driver >= 18
  ? console.log("Yeah! Lets drive now")
  : console.log("Oohn, no! You can not drive.");

//Comparison operarators: ==, ===, !==, >=, <=, <, >)
//To compare the value and the type

console.log(1 == 1);
console.log(str2 === 1);
let num1 = 1;
let num2 = "1";
console.log(num1 === num2);
console.log(num1 == num2);
console.log(num1 + num2);

//Different options for printing the number 5b
// ----- option 1
console.log(5);
// ----- option 2
let num = 5;
console.log(num);
// ----- option 3
let a = 2;
let b = 3;
console.log(a + b);

let string = "Hi my name is Sergio. I am 27 years old";
// CALL THE PRINTING FUNCTION

function print(stuff) {
  console.log(stuff);
}

print("Sergio");
print(string);

let str1 = string.substring(6);
console.log(str1);

let str2 = string.substring(4, 8);
console.log(str2);

let str3 = string.toUpperCase();
console.log(str3);

let str4 = string.toLocaleLowerCase();
console.log(str4);

let firstName = "seRgIo";
let firstPart = firstName[0].toUpperCase();
let lastPart = firstName.substring(1, 6).toLowerCase();
console.log(firstPart + lastPart);

//

let longStr = "Hi this is me, I am Sergio and I live in Dresden.";
let text = longStr.includes("I");
let text2 = longStr.includes("this");
console.log(text2);
console.log(text);

//.lenght -num
let longText = "This is a long text";
let subStr = longText.substring(longText.lenght - 4);
console.log(subStr);

//Slice
let sliceStr = longText.slice(5);
console.log(sliceStr);

// ` ` Backtick sign

let firtUserName = "Zain";
let lastUserName = "something";
let add = "xxx str, 1234 Berlin";

/* console.log("Hi, I am " + firstUserName + ", I live in " + add + ". My last name " + "lastUserName");  */

/* console.log(`Hi, I am ${firstUserName}, I live in ${add}. My last name is ${lastUserName}`); */

var globalVar = "This is global";
console.log(globalVar);
globalVar = "This is global plus";

function sub(x, y) {
  let local = "This is a local variable";
  console.log(local);
  console.log(globalVar);
  globalVar = "This is global plus + ";
  console.log(globalVar);
  return x - y;
}
console.log(sub(10, 4));

// ++ += -- -=

//num1 = num1 + 1;
let num1 = 1;
num1 += 1;
console.log(num1);

//num2 = num2 -1; num2 -=1;
let num2 = 2;
num2 -= 1;
console.log(num2);

//Increment
let w = 10;
w++;
++w;
console.log(w);

//Decrement
let q = 10;
q--;
--q;
console.log(q);

//===============Some very easy exercises==============================

// Create two variables.
// One variable should contain a string value and
//the other should contain a number. Concatenate the string and the number.

let x = "january";
let y = 5;
let b = x + " " + y;
console.log(b);

// Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
//33, 40, 2,1,22

let z = 33;
z % 2 == 0 ? console.log("Number is even") : console.log("It is odd");
z = 40;
z % 2 == 0 ? console.log("Number is even") : console.log("It is odd");
z = 2;
z % 2 == 0 ? console.log("Number is even") : console.log("It is odd");
z = 1;
z % 2 == 0 ? console.log("Number is even") : console.log("It is odd");
z = 22;
z % 2 == 0 ? console.log("Number is even") : console.log("It is odd");

// Create a variable with the value of “123”. Convert it to a number.
let r = "123";
let numR = parseInt(r, 10);
console.log(numR);

// Create a variable with the value of “130.7". Convert it to a number.

let s = "130.7";
let numS = parseFloat(s, 10);
console.log(numS);

// Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!

let isdog = true;
isdog == true ? console.log("pat, pat") : console.log("Find me a dog to pat!");
/* Math
Perform Mathematical Tasks with JavaScript. Remember: you must use the Math functions and print all results to the console!
1. Minimum and maximum */
/* a. Lowest Number*/
/*Print out the lowest number between -1 and 4. */

console.log(Math.min(-1, 0, 1, 2, 3, 4));

/*  Highest Number
Print out the highest number between -1 and 4. */

console.log(Math.max(-1, 0, 1, 2, 3, 4));

/* Rounding
a. Round up
Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342. */

function roundUp(roundUpNumber) {
  return Math.ceil(roundUpNumber);
}

console.log(roundUp(3321.32321));
console.log(roundUp(326.76));
console.log(roundUp(76788.7));
console.log(roundUp(-9.78));
console.log(roundUp(43.342));

/* Round down
Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.*/

function roundDown(randomNumber) {
  return console.log(Math.floor(randomNumber));
}

roundDown(3321.32321);
roundDown(326.76);
roundDown(76788.7);
roundDown(-9.78);
roundDown(43.342);

/*Strings and Numbers */

/* Concatenation.
Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
let introSentence = "Hi, my name is Nancy and I am";
let age = 25;
Expected Output:
"Hi, my name is Nancy and I am 25"
In this case, what is the + operator doing? Comment your answer in the js file. */

let introSentence = "Hi, my name is Sergio and I am";
let age = 27;
console.log(`${introSentence} ${age}`);

/* The Operator is just joining together the string and the number together making them appear like a sentence. In my answer I used the "`" so that I could more easily join together the variable and the string in order to create the whole phrase. */

/* Converting
Create a variable with the value of “1005”. Convert it to a number.*/

let convertNum = "1005";
let convertNumInt = parseInt(convertNum, 10);
console.log(convertNumInt);

/*Create a variable with the value of “10.05". Convert it to a number. */

let convertNum2 = "10.05";
convertNumInt = parseFloat(convertNum2, 10);
console.log(convertNumInt);

//Creating the function print:
function print(stuff) {
  console.log(stuff);
}

/*  Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.*/

let sentence = "I can walak in the park all day!";
let select = sentence.substring(18, 23);
print(select);

/* Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console. */
let helloStr = "Hello World";
let helloWorld = helloStr.toUpperCase();
print(helloWorld);

/* Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.*/

let threeStr = "Earthlings";
let lowerThreeStr = threeStr.toLowerCase();
print(lowerThreeStr);

/* Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.*/

let newWord = "JavaScript";
let shortVersion = newWord.substring(3, 6);
print(shortVersion);

/* Check if the sentence “nice shoes” contains the letter l.*/

let smallSentence = "Nice Shoes";
let text = smallSentence.includes("l");
print(text);

/* Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ. */

let name = "Roberto";
let newname = name[0] + name + name[0];
print(newname);

/* Create a new string from a given string, taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more. */

let newString = "dresden";
let addedString = newString.substring(0, 3);
console.log(`${addedString}${newString}${addedString}`);

/* Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.*/

let wordExEight = "surfing";
let newWordExEight = wordExEight.toUpperCase();
console.log(newWordExEight);
let checkNewWordEXEight = newWordExEight.includes("Java");
console.log(checkNewWordEXEight);

// upperNewStr.includes("Java") ? console/log("Nice"): console.log(Oh, nooo)
// console.log(11 == 12 ? "Awesome!" : "Not so true.")

/* Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ? */

let nineStr = "Brasil";
let firstNineStr = nineStr[0];
let lastNineStr = nineStr[5];
let middleNineStr = nineStr.slice(1, -1);
console.log(`${lastNineStr}${middleNineStr}${firstNineStr}`);

/* Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”. Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”. */

let firstName = "Sergio";
let add = "live in Berlin";
let profession = "I am an aspiring Web Developer";
console.log(`My name is ${firstName}, I ${add}. ${profession}`);

/* Declare a variable and assign the value “the quick brown fox” (all in lower case). Capitalize the first letter of that string. Print the result to the console. */

let randon = "the quick brown fox";
let finalRandon = randon[0].toUpperCase() + randon.slice(1);
console.log(`${finalRandon}`);
