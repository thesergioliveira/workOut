let bool = " ";
bool ? console.log("cool") : console.log("not cool");

let str = "Hadi";
console.log(str[str.lenght -1]);

/* let LongStr = "    Hi I am hadi";
console.log(longStr.trim( )); */

function display (str) {
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
isNaN(int1) ? console.log("Yeah it's not a  number") : console.log("Nope sorry");
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


