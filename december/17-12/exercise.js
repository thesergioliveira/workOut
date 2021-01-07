//Exercise 1-
//1, 2
let addr = "Gret-Palucca-straße";
console.log(addr);
console.log(addr[2], addr[6]);

//3,4,5
let name2 = "Sergio Almeida Oliveira";
let age = 27;
let year = 2020;
let isMarried = 21>10; 

//6,7,8
console.log(name2, "is", age, "in", year);   
console.log("Married?", isMarried);

//9
let programmingLanguage = "Javascript";
let isFun = true;
isFun == false ? 
console.log("Sorry Javasscript isFun: true")
: console.log(programmingLanguage, "is fun: ",isFun);

//10, 11
console.log(programmingLanguage[0], programmingLanguage[4]);
console.log(programmingLanguage.length);

//2nd exercise

//Ternary operator 

let isStudent = true;

//Solution for someone who is a student
isStudent == true ? 
console.log("Ticket costs 5 euros") 
: console.log("");

//Solution for someone who is not a student
isStudent == false ? 
console.log("Ticket costs 12 euros") 
: console.log("")

//Solution or someone driving at 50 or over
let speedCheck = 10;
speedCheck > 50?
console.log("You are goint too fast!") 
: console.log("");

//For someone driving 49 or lower
speedCheck < 50?
console.log("You are driving bellow the speed limit, oma") 
: console.log("");

