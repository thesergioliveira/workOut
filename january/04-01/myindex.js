//Different options for printing the number 5b 
// ----- option 1
console.log(5);
// ----- option 2
let num = 5;
console.log(num);
// ----- option 3
let a = 2;
let b = 3;
console.log(a+b);

let string = "Hi my name is Sergio. I am 27 years old";
// CALL THE PRINTING FUNCTION

function print(stuff) {
    console.log(stuff)
}

print ("Sergio");
print (string);


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
    console.log (globalVar);
    return x -y;
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

