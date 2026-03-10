// 1. greetUser(name)

function greetUser(name) {
    console.log("Welcome to Stackly, " + name);
}

greetUser("Jeevitha");


// 2. calculateSalary(basic, bonus)

function calculateSalary(basic, bonus) {
    return basic + bonus;
}

console.log(calculateSalary(20000, 50000));


// 3. checkEvenOdd(num)

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(7));

// 4. findMax(a,b,c)

function findMax(a, b, c) {
    return Math.max(a, b, c);
}

console.log(findMax(10, 25, 15));


// 5. calculateGST(price)

function calculateGST(price) {
    return price + (price * 0.18);
}

console.log(calculateGST(1000));


// 6. login(username, password)

function login(username, password) {
    if (username === "admin" && password === "1234") {
        return "Login Successful";
    } else {
        return "Invalid Username or Password";
    }
}

console.log(login("admin", "1234"));

//==============================
// Default Parameters
//==============================

// 1. createEmployee(name, role='Trainee')

function createEmployee(name, role = "Trainee") {
    console.log("Employee Name: " + name);
    console.log("Role: " + role);
}

createEmployee("Jeevitha");
createEmployee("Priya", "Developer");


// 2. calculateDiscount(price, discount=10)

function calculateDiscount(price, discount = 10) {
    let finalPrice = price - (price * discount / 100);
    return finalPrice;
}

console.log(calculateDiscount(1000)); 
console.log(calculateDiscount(1000, 20));

// 3. orderFood(item, quantity=1)

function orderFood(item, quantity = 1) {
    console.log("Item: " + item);
    console.log("Quantity: " + quantity);
}

orderFood("Biriyani");
orderFood("Naan", 3);

//==============================
// Scope
//==============================

// 1. Global variable accessed inside function

let company = "Stackly";

function showCompany() {
    console.log("Company Name:", company);
}

showCompany();


// 2. var, let, const inside block

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log("Inside block:", a, b, c);
}

console.log("var outside block:", a); 

// 3. Variable inside function cannot be accessed outside

function testScope() {
    let message = "Hello from function";
    console.log(message);
}

testScope();

//==============================
// Hoisting
//==============================

// 1.

console.log(a); //undefined
var a =10;

// 2.

console.log(b); //reference error
let b = 20;

//3.
greetUser();

function greetuser(){
    console.log("Welcome to the site");
}

//==============================
// Function Types
//==============================

// 1. Named Function

function showMessage() {
    console.log("Named Function Example");
}

showMessage();


// 2. Anonymous Function stored in variable

let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(5, 4));


// 3. Arrow Function to return square

let square = (num) => {
    return num * num;
};

console.log(square(6));

//==============================
// Callback & Higher Order Functions
//==============================

// 1. processData(callback)

function processData(callback) {
    console.log("Processing Data...");
    callback();
}

function done() {
    console.log("Callback function executed");
}

processData(done);

// 2. calculate(a,b,operation)

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, sub));

// 3. Callback after calculation

function calculateSum(a, b, callback) {
    let result = a + b;
    console.log("Result:", result);
    callback();
}

function taskCompleted() {
    console.log("Task Completed");
}

calculateSum(4, 6, taskCompleted);

// 4. Function accepting callback to print user data

function getUserData(callback) {
    let user = {
        name: "John",
        age: 25
    };

    callback(user);
}

function displayUser(user) {
    console.log("Name:", user.name);
    console.log("Age:", user.age);
}

getUserData(displayUser);

//==============================
// Currying
//==============================

// 1.

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(2)(3)(4)); // 9

// 2.

function multiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

console.log(multiply(2)(3)(4)); // 24

//==============================
// IIFE
//==============================

// 1.

(function() {
    console.log("Website Loaded");
})();

// 2.

(function(price, discount) {
    let finalPrice = price - (price * discount / 100);
    console.log("Final Price:", finalPrice);
})(1000, 10);

//==============================
// Generator functions
//==============================

// 1.

function* couponGenerator() {
    yield "SAVE10";
    yield "WELCOME20";
    yield "FESTIVE30";
}

let coupons = couponGenerator();

console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);

// 2.

function* motivationGenerator() {
    yield "Keep coding and never give up!";
    yield "Debugging makes you a better developer!";
    yield "Practice daily to master programming!";
}

let messages = motivationGenerator();

console.log(messages.next().value);
console.log(messages.next().value);
console.log(messages.next().value);

//==============================
// Spread Operator
//==============================

//1.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

// 2.

let originalArray = [10, 20, 30];

let clonedArray = [...originalArray];

console.log(clonedArray);

// 3.

let obj1 = { name: "Jeevitha" };
let obj2 = { role: "Developer" };

let mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);

//==============================
// Rest Operator
//==============================

// 1.

function sumAll(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sumAll(10, 20, 30, 40));

// 2.

function showArgs(first, ...rest) {
    console.log("First Argument:", first);
    console.log("Rest Arguments:", rest);
}

showArgs(10, 20, 30, 40);

// 3.

function totalBill(...prices) {
    let total = 0;

    for (let price of prices) {
        total += price;
    }

    return total;
}

console.log(totalBill(100, 250, 300));

//==============================
// Destructuring
//==============================

// 1.

let arr = [10, 20, 30, 40];

let [a, b, c, d] = arr;

console.log(a, b, c, d);

//2.

let employee = {
    name: "Naveen",
    role: "Developer",
    salary: 40000
};

let {name, role, salary} = employee;

console.log(name, role, salary);

// 3.

let numbers = [10, 20, 30, 40];

let [first, , , last] = numbers;

console.log(first, last);

// 4.

let arr2 = [1, 2, [3, 4]];

let [x, y, [z, w]] = arr2;

console.log(x, y, z, w);

//==============================
// Array Manipulation
//==============================

let arr = [1, 2, 3, 4, 5];

// push 

arr.push(6);
console.log("After push:", arr);

// pop 

arr.pop();
console.log("After pop:", arr);

// shift

arr.shift();
console.log("After shift:", arr);

// unshift 

arr.unshift(0);
console.log("After unshift:", arr);

// 2.

let numbers = [1, 2, 3, 40, 50, 6];

numbers.splice(3, 2, 4, 5);

console.log(numbers);