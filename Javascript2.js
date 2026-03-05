// ===============================
//1. Basic Arithemetic
// ===============================

console.log(25+4); //29
console.log(25-4); //21
console.log(25*4); //100
console.log(25/4); //6.25
console.log(25%4); //1
console.log(25**4); //390625

// 2
console.log(100%30); //10

// 3

console.log(7**2); //49

// 4

console.log(2**5); //32

// 5

let n1=50;
console.log(50/5); //10

// 6

console.log(45%6); //3

// 7

console.log(0.5*8); //4

// 8

console.log(200-75); //125

// 9

console.log(20+30+40); //90

// 10

console.log(9%2); //1

// ===============================
// SECTION 2 – Increment / Decrement
// ===============================

let a = 5; console.log(a++); console.log(a);
// 5
// 6

let a = 5; console.log(++a); console.log(a);
// 6
// 6

let a = 10; let b = a++; console.log(a, b);
// 11 10

let a = 10; let b = ++a; console.log(a, b);
// 11 11

let a = 1; let b = a++ + a++; console.log(a, b);
// 3 3

let a = 1; let b = ++a + ++a; console.log(a, b);
// 3 5

let a = 3; a = a++; console.log(a);
// 3

let a = 3; a = ++a; console.log(a);
// 4

let x = 5; let y = --x; console.log(x, y);
// 4 4

let x = 5; let y = x--; console.log(x, y);
// 4 5

let a = 2; let b = a++ + ++a + a++; console.log(a, b);
// 5 10

let a = 4; let b = --a + a-- + --a; console.log(a, b);
// 1 7

let a = 1; let b = ++a + a++ + ++a; console.log(a, b);
// 4 8

let a = 5; let b = a++ + a++ + a++; console.log(a, b);
// 8 18

let a = 10; a += a++; console.log(a);
// 20


// ===============================
// SECTION 3 – Assignment Operators
// ===============================

let a = 10; a += 5; console.log(a);
// 15

let a = 20; a -= 8; console.log(a);
// 12

let a = 7; a *= 3; console.log(a);
// 21

let a = 40; a /= 5; console.log(a);
// 8

let a = 25; a %= 4; console.log(a);
// 1

let a = 5; a += 3; a *= 2; console.log(a);
// 16

let a = 10; a -= 2; a /= 4; console.log(a);
// 2

let a = 8; a %= 3; console.log(a);
// 2

let a = 6; a += a; console.log(a);
// 12

let a = 2; a *= (a += 3); console.log(a);
// 10


// ===============================
// SECTION 4 – Comparison
// ===============================

console.log(5 == "5");
// true

console.log(5 === "5");
// false

console.log(0 == false);
// true

console.log(0 === false);
// false

console.log(null == undefined);
// true

console.log(null === undefined);
// false

console.log("10" > 5);
// true

console.log("2" > "10");
// true

console.log(true == 1);
// true

console.log(true === 1);
// false


// ===============================
// SECTION 5 – Logical Operators
// ===============================

console.log(true && false);
// false

console.log(true || false);
// true

console.log(false || false);
// false

console.log(!true);
// false

console.log(!(5 > 2));
// false

console.log(5 > 3 && 10 > 5);
// true

console.log(5 > 3 && 10 < 5);
// false

console.log(5 < 3 || 10 < 5);
// false

console.log(5 < 3 || 10 > 5);
// true

console.log((5 > 2 && 3 > 1) || (10 < 2));
// true


// ===============================
// SECTION 6 – Ternary
// ===============================

let age = 20

age >=18 ? console.log("Adult"): console.log("Minor"); // Adult


let marks = 30

marks >=50 ? console.log("Pass"): console.log("Fail"); //Fail

let number = 7;

number % 2 == 0 ? console.log("Even") : console.log("Odd"); //Odd

let mark = 82;

mark >= 90 ? console.log("A") :
mark >= 75 ? console.log("B") :
mark >= 50 ? console.log("C") :
console.log("Fail");
 
// B

let num = -5;
num > 0 ? console.log("Positive"): console.log("Negative"); // Negative

// ===============================
//SECTION 7 – String & Concatenation (61–65)
// ===============================

let nam1 = "Hello"
    nam2 = "World"

console.log(`${nam1} ${nam2}`); //Hello World

let nam3=Jeevitha
    nam4=Dhanasekar
console.log(nam3+nam4); //Jeevitha Dhanasekar

let nam5=Jeevitha
    nam6=Dhanasekar
console.log(`${nam5} ${nam6}`);  //Jeevitha Dhanasekar

let num1="10"
    num2 =5
console.log(num1+num2);  //105

let num3= 5
    num4="10"
console.log(num3+num4);  //510

// ===============================
//SECTION 8 – Implicit Type Conversion (66–70) 
// ===============================

"5" + 2 //String

"5" - 2 // String

"5" * 2 //String

true + 1 //Number

false + "1" //String

//SECTION 9 – Explicit Conversion (71–75) 

Number("123") //Numer 123

Number("abc") //Number NAN

Number(true) //Number 1

Boolean("") //False

Boolean("hello") //True

// ===============================
//FINAL RAPID FIRE ROUND
// ===============================

//Explain difference between == and ===

    //== It will check both side values alone. If its same means return "true".
    // === It will check both side values and data types. Is its different means return "false"

//Explain difference between a++ and ++a

    // a++ - Post increment return old value and then increase
    // ++a - Pre increment increase the value and then return new value

//List all falsy values

    //false, 0, null, empty string, NaN, -0, undefinied

//Explain why "5" - 2 works but "5" + 2 behaves differently

    //- always converts operands to numbers, but + performs concatenation 
    // when one operand is a string, so no numeric conversion happens.

//Explain why null == undefined is true

   // null == 0        // false
   // undefined == 0   // false
   // so, 0==0 //true


