//Creating the function print:
function print(stuff) {
    console.log(stuff)
}

/* 1. Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.*/

let sentence = "I can walak in the park all day!"
let select = sentence.substring(18, 23);
print (select);

 /*2. Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console. */
let helloStr = "Hello World";
let helloWorld = helloStr.toUpperCase();
print (helloWorld);

/* 3. Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.*/

let threeStr = "Earthlings"
let lowerThreeStr = threeStr.toLowerCase();
print (lowerThreeStr);

/* 4. Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.*/

let newWord = "JavaScript";
let shortVersion = newWord.substring(3,6);
print (shortVersion);

/* 5. Check if the sentence “nice shoes” contains the letter l.*/

let smallSentence = "Nice Shoes";
let text = smallSentence.includes("l");
print (text);

/* 6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ. */

let name = "Roberto"
let newname = name[0] + name + name[0];
print (newname);

/* 7. Create a new string from a given string, taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more. */

let newString = "dresden";
let addedString = newString.substring(0,3);
console.log(`${addedString}${newString}${addedString}`);

 /*8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.*/

let wordExEight = "surfing";
let newWordExEight = wordExEight.toUpperCase();
console.log(newWordExEight);
let checkNewWordEXEight = newWordExEight.includes("Java");
console.log(checkNewWordEXEight);

// upperNewStr.includes("Java") ? console/log("Nice"): console.log(Oh, nooo)
// console.log(11 == 12 ? "Awesome!" : "Not so true.")


 /*9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ? */

let nineStr = "Brasil";
let firstNineStr = nineStr[0];
let lastNineStr = nineStr[5];
let middleNineStr = nineStr.slice(1, -1)
console.log(`${lastNineStr}${middleNineStr}${firstNineStr}`);

 /*10. Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”. Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”. */

let firstName = "Sergio";
let add = "live in Berlin";
let profession = "I am an aspiring Web Developer" ;
console.log(`My name is ${firstName}, I ${add}. ${profession}`)

 /*11. Declare a variable and assign the value “the quick brown fox” (all in lower case). Capitalize the first letter of that string. Print the result to the console. */

let randon = "the quick brown fox";
let finalRandon = randon[0].toUpperCase() + randon.slice(1);
console.log(`${finalRandon}`);





