//Futher Exercises
//
//1- Create a function that can print (console.log())any parameters that you give it.  
//
function print(whatever) {
    console.log(whatever);
}
print("jhvdcjhvsd");
//
//2- Declare a variable with the value of a sentence bigger than 5 words. Create a function that will print on the console specific words of the sentence:
//
let strBigger5 = "I am in love with Javascript";
//
//
//a- The first word;
function printSpecific(x, y){
    console.log(strBigger5.substring(x, y))
}
printSpecific(0,1);
//
//b- The last word; 
printSpecific(18, 29);
//c- All the words execpt the last one;
printSpecific(0,17);
//d- Every other word of your sentence. 
//
var lowerCaseWords = strBigger5.split(" ").filter



function printSpecificV2(stringToSplit, separator){
    var arrayStrBigger5 = stringToSplit.split(separator); 
    console.log(arrayStrBigger5.lenght);
}
var strToSeparate = "I am also in love with Javascript";
printSpecificV2(strToSeparate, " ");
//
//3- Declare a variable with the value of "It is niCe to pRaCtIcE my JavaScript SKILLS". Then do the following tasks:
//
let strEx3 = "It is niCe to pRaCtIcE my JavaScript SKILLS";
//a- Convert it all to upper case;
print(strEx3.toUpperCase());
//b- convert all but the first and last word to upper case;
let strEx3Middle = strEx3.substring(3,36).toUpperCase();
print(strEx3Middle);
//c- convert only the first letter of every word to upper case;
/* let str1stLetter = strEx3.substring(0).toUpperCase();
let str2ndLetter = strEx3.substring(4).toUpperCase();
let str3rdLetter = strEx3.substring(7).toUpperCase();
let str4thLetter = strEx3.substring(12).toUpperCase();
let str5htLetter = strEx3.substring(15).toUpperCase();
let str6thLetter = strEx3.substring(24).toUpperCase();
let str7thLetter = strEx3.substring(27).toUpperCase();
let str8thLetter = strEx3.substring(37).toUpperCase();
print(str1stLetter); */ //bad attempt
//
print("It Is Nice To Practice My Javascript Skills");
//
//
//d- convert all the words to lowercase.
print(strEx3.toLowerCase());
//
//Roman Exercises
/* Create a function that takes the age and return the age in days.
calcAge(65) ➞ 23725
calcAge(0) ➞ 0
calcAge(20) ➞ 7300
Notes
Use 365 days as the length of a year for this challenge.
Ignore leap years and days between last birthday and now.
Expect only positive integer inputs. */
//
function ageCalc (age){
    var x = age
    console.log(x * 365);
    
}
ageCalc(30);
//
/* Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
wins get 3 points
draws get 1 point
losses get 0 points
footballPoints(3, 4, 2) ➞ 13
footballPoints(5, 0, 2) ➞ 15
footballPoints(0, 0, 1) ➞ 0  */
//
function calcPoints(x, y, z) {
    let w = (x * 3) + (y * 1) + (z * 0);
    console.log(w + " points!");
}
calcPoints(5, 2, 9);

/* A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement" */
//
function detectWord() {


}

let vals = [5, 4, 9, 2, 1];
function isEven(num) {
    return (num % 2 == 0)
}
vals = vals.filter(isEven);
console.log(vals);

//Viviane's Exercise
//
// 1. Create a program that will allow you to roll a 12-sided dice.
console.log(Math.floor(Math.random()* 12) +1);
// 2. Create a variable with an integer as a string value. Convert the string into a number.
let intEx2 = "59";
console.log(intEx2Number = parseInt(intEx2, 10));
//
// 3. Create a variable with the value "-5.067" as a string, convert it into a number.
//
let strEX3 = "-5,067"
console.log(strEx2Number = parseFloat(strEX3, 10));
//
// 4. Which is the highest number from the following list of numbers?
// Show me using JS.
    // a. (13, -2, 99.99, 5.01)
console.log(Math.max(13, -2, 99.99, 5.01));
    // b. (-2.223, -0.5501, -1.230569, -6.003)
console.log(Math.max(-2.223, -0.5501, -1,230569, -6,003));
    // c. (5/4, 6/7, 10/3)
console.log(Math.max(-2.223, -0.5501, -1.230569, -6.003));
// 5. Create a variable with your age as the value and a variable with your birthday.
let myAge = "I am 27 years old.";
let myBirthday = " My birthday is on the 28th of november 1993.";
// Concatenate them into a coherent sentence, introducing yourself with the variables.
console.log(`${myAge}${myBirthday}`);
//
// 6. Round down these numbers: (-3.325, -23.89, 12.7, 199.2).
function roundDown(x){
    console.log(Math.floor(x));
}
roundDown(-3.325);
roundDown(-23.89);
roundDown(12.7);
roundDown(199.2);
//
//
// 7. Create an anagram (rearrange letters in a word).
// 8. Confuse me with your genius. Create a function. (Show me your answer. We can vote for the most confusing one.)