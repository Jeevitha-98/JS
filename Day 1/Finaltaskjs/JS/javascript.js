//Task 1

let n="Jeevitha";
let age=27;
let l="Coimbatore";
console.log("My name is " + n);
console.log("I am " + age + " years old");
console.log("I am from " + l);

//Task 2

 var n3 = prompt("Enter your name:");

alert("Welcome " + n3 + "!");

var c = confirm("Do you want to learn JavaScript?");

if (c) {
    alert("Great Choice!");
} else {
    alert("No Problem!");
}

//Task 3

let s = "Hello";
let n1 = 100;
let b = true;
let u;
let e = null;

console.log("Value:", s, "| Type:", typeof s);
console.log("Value:", n1, "| Type:", typeof n1);
console.log("Value:", b, "| Type:", typeof b);
console.log("Value:", u, "| Type:", typeof u);
console.log("Value:", e, "| Type:", typeof e);

//Task 4

let colors = ["Red", "Blue", "Green", "Yellow", "Pink", "Black"];

console.log("First color:", colors[0]);
console.log("Last color:", colors[colors.length - 1]);
console.log("Total colors:", colors.length);
console.log(colors);

//Task 5

let subjects = ["Tamil", "English", "Math", "Science", "Social Science"];

let index = prompt("Enter a number between 0 and 4:");

console.log("Selected Subject:", subjects[index]);

//Task 6

let student = {
    name: "Jeevitha K",
    age: 27,
    course: "Full Stack Development",
    skills: ["HTML", "CSS", "JS" , "SQL"]
};

console.log("Student Name:", student.name);
console.log("Second Skill:", student.skills[1]);
console.log("Course Name:", student.course);

//Task 7

var product = {
    name: "Laptop",
    price: 45000,
    category: "Electronics",
    inStock: true
};

console.log("Product Name:", product.name);
console.log("Price:", product.price);
console.log("Available:", product.inStock ? "Yes" : "No");

//Task 8

let fruits = {
    tropical: ["mango", "pineapple"],
    berries: ["strawberry", "blueberry"],
    citrus: ["orange", "lemon"]
};

console.log("Blueberry:", fruits.berries[1]);
console.log("Mango:", fruits.tropical[0]);
console.log("Lemon:", fruits.citrus[1]);
console.log("Total Categories:", Object.keys(fruits).length);

