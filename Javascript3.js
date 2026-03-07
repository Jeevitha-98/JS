//=================================
//If/else condition
//=================================

// 1.
let num=15;

if (num>10){
    console.log("Number is big")
}
else{
    console.log("Number is small")
}

//2.

let age= 20;

if (age>=18){
    console.log("You are eligibile for vote")
}
else{
    console.log("You are not eligible for vote")
}

// 3.

let temp = Number(prompt("Enter your room temperature"));

if(temp>30){
    alert("hot")
}
else{
    alert("cool")
}

// 4.

let num2= -1;

if(num2<0){
    console.log("Negative")
}
else{
    console.log("Positive")
}

//5. let a = 1;

if (a%2==1){
    console.log ("odd")
}
else{
    console.log("even")
}

//=================================

// Else If

//=================================

// 1. 

let marks = 85;

if (marks >= 90){
    console.log("Grade A");
}
else if (marks >= 70){
    console.log("Grade B");
}
else if (marks >= 50){
    console.log("Grade C");
}
else{
    console.log("Fail");
}

// 2.

let hour = 14;

if (hour < 12){
    console.log("Morning");
}
else if (hour < 17){
    console.log("Afternoon");
}
else if (hour < 20){
    console.log("Evening");
}
else{
    console.log("Night");
}

// 3.

let num3 = -5;

if (num3 > 0){
    console.log("Positive number");
}
else if (num3 < 0){
    console.log("Negative number");
}
else{
    console.log("Number is zero");
}

// 4. 

let score = 75;

if (score >= 100){
    console.log("Winner");
}
else if (score >= 50){
    console.log("Good");
}
else{
    console.log("Try again");
}

// 5.

let a = 10;
let b = 25;
let c = 15;

if (a > b && a > c){
    console.log("A is largest");
}
else if (b > a && b > c){
    console.log("B is largest");
}
else{
    console.log("C is largest");
}

//=================================

// Switch Statement

//=================================

// 1.

let day = 2;

switch(day){
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 1: console.log("Sunday"); break;
    default: console.log ("Invalid day");
}

// 2.

let trafficlight = "Green";

switch(trafficlight){
    case "Red": console.log("Vehicle stop"); break;
    case "Yellow": console.log("vehicle start"); break;
    case "Green": console.log ("vehicle go"); break;
    default: console.log("Invalid signal");
}

// 3.

let month = "December";

switch(month){
    case "December":
    case "January":
    case "February":
        console.log("Winter");
        break;

    case "March":
    case "April":
    case "May":
        console.log("Summer");
        break;

    case "June":
    case "July":
    case "August":
        console.log("Monsoon");
        break;

    case "September":
    case "October":
    case "November":
        console.log("Autumn");
        break;

    default:
        console.log("Invalid month");
}

// 4.

let role = "Admin";

switch(role){
    case "Admin":
        console.log("Full access granted");
        break;

    case "User":
        console.log("Limited access");
        break;

    case "Guest":
        console.log("View only access");
        break;

    default:
        console.log("Unknown role");
}

// 5.

let grade = "A";

switch(grade){
    case "A":
        console.log("Excellent performance");
        break;

    case "B":
        console.log("Good performance");
        break;

    case "C":
        console.log("Average performance");
        break;

    case "D":
        console.log("Needs improvement");
        break;

    default:
        console.log("Invalid grade");
}

//=================================

// For Loop

//=================================

// 1.

for (i=0; i<= 10; i++){
 console.log (i);
}

// 2.

for (let i = 10; i >= 1; i--){
    console.log(i);
}

// 3.

for (let i = 1; i <= 20; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

// 4.

for (let i = 1; i <= 20; i++){
    if (i % 2 == 1){
        console.log(i);
    }
}

// 5.

for (let i = 1; i <= 10; i++){
    console.log("5 x " + i + " = " + (5 * i));
}

//=================================

// While Loop

//=================================

// 1.

let i = 1;

while (i <= 5){
    console.log(i);
    i++;
}

// 2.

let i1 = 5;

while (i1 >= 1){
    console.log(i1);
    i1--;
}

// 3.

let i2 = 1;

while (i2 <= 10){
    if (i2 % 2 == 0){
        console.log(i2);
    }
    i2++;
}

// 4.

let i3 = 1;
let sum = 0;

while (i3 <= 10){
    sum = sum + i3;
    i3++;
}

console.log("Sum =", sum);

// 5.

let i4 = 1;

while (i4 <= 5){
    console.log(i4 * i4);
    i4++;
}

//=================================

// Do While 

//=================================

// 1.

let i = 1

do {
    console.log(i);
    i++;
}
while(i <= 5);

// 2.

let i = 5

do {
    console.log(i);
    i++;
}
while(i >=1);

// 3.

let i = 3;

do{
    console.log(i);
    i += 3;
}
while(i <= 30);

// 4.

let i = 1;

do{
    if(i % 4 == 0){
        console.log(i);
    }
    i++;
}
while(i <= 20);

// 5.

let i = 1;

do{
    console.log(i);
    i++;
}
while(i <= 10);

//=================================

// For of

//=================================

// 1.

let str = "javascript";

for (let char of str){
    console.log(char);
}

// 2.

let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits){
    console.log(fruit);
}

//3.

let str = "javascript";
let count = 0;

for (let char of str){
    count++;
}

console.log("Total characters:", count);

//4.

let str = "javascript";

for (let char of str){
    if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
    ){
        console.log(char);
    }
}

// 5.

let numbers = [10, 20, 30];
let sum = 0;

for (let num of numbers){
    sum = sum + num;
}

console.log("Sum =", sum);

//=================================

// For in

//=================================

// 1.

let student = {
    name: "Jeevitha",
    age: 27,
    department: "Computer Science"
};

for (let key in student){
    console.log(student[key]);
}

// 2.

let student = {
    name: "Jeevitha",
    age: 27,
    department: "Computer Science"
};

for (let key in student){
    console.log(key);
}

// 3.

let student = {
    name: "Jeevitha",
    age: 27,
    department: "Computer Science"
};

for (let key in student){
    console.log(key + " : " + student[key]);
}

//=================================

// Functions

//=================================

// 1.

function add(a, b){
    return a + b;
}

let result = add(10, 5);
console.log(result);

// 2.

function square(num){
    return num * num;
}

let result = square(4);
console.log(result);