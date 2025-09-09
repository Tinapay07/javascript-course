// ////////////////////////////////////

// // The Array Problem
// // Hour 3

// const jonasArray = [

//   "Jonas",

//   "Schmedtmann",

//   2037 - 1991,

//   "teacher",

//   ["Michael", "Peter", "Steven"],

// ];

// console.log(jonasArray[0]); // What is this? firstName?

// console.log(jonasArray[1]); // lastName?

// console.log(jonasArray[2]); // age?

// ////////////////////////////////////

// // Objects - Creation with Object Literal Syntax

// console.log("=== OBJECTS ===");

// // Object literal syntax - curly braces create objects

// const jonas = {

//   firstName: "Jonas", // property: string value

//   lastName: "Schmedtmann", // property: string value

//   age: 2037 - 1991, // property: calculated value

//   job: "teacher", // property: string value

//   friends: ["Michael", "Peter", "Steven"], // property: array value

// };

// console.log(jonas);

// // //const jonasArray = [

// //   "Jonas",

// //   "Schmedtmann",

// //   46,

// //   "teacher",

// //   ["Michael", "Peter", "Steven"],

// // ];

// // What does position 2 represent? You have to remember!

// const jonasObject = {

//   firstName: "Jonas",

//   lastName: "Schmedtmann",

//   age: 46,

//   job: "teacher",

//   friends: ["Michael", "Peter", "Steven"],

// };

// // Crystal clear what each value represents!

// // Dot notation - clean and readable

// console.log(jonas.firstName); // 'Jonas'

// console.log(jonas.lastName); // 'Schmedtmann'

// console.log(jonas.age); // 46

// console.log(jonas.job); // 'teacher'

// console.log(jonas.friends); // ['Michael', 'Peter', 'Steven']

// // Bracket notation - uses strings

// console.log(jonas["firstName"]); // Same result as dot notation

// console.log(jonas["lastName"]);

// console.log(jonas["age"]);

// // Bracket notation with expressions - compute property names!

// const nameKey = "Name";

// console.log(jonas["first" + nameKey]); // 'Jonas'

// console.log(jonas["last" + nameKey]); // 'Schmedtmann'

// // This is impossible with dot notation

// // jonas.'first' + nameKey  // ❌ Syntax error!

// // Both notations work for modification

// jonas.job = "programmer";

// jonas["age"] = 35;

// console.log(jonas);

// // Objects can grow - add properties after creation

// jonas.location = "Portugal";

// jonas["twitter"] = "@jonasschmedtman";

// jonas.hasDriversLicense = true;

// console.log(jonas);

// // Ordered, indexed data - think lists

// const listOfYears = [1991, 1984, 2008, 2020];

// const shoppingList = ["apples", "bananas", "milk", "bread"];

// const testScores = [85, 92, 78, 96];

// // Named, descriptive data - think entities

// const person = {

//   name: "Jonas",

//   age: 46,

//   occupation: "teacher",

// };

// const car = {

//   brand: "Toyota",

//   model: "Camry",

//   year: 2020,

//   color: "blue",

// };

// // Objects can contain arrays, arrays can contain objects

// const student = {

//   name: "Sarah",

//   grades: [85, 92, 78], // Array inside object

//   address: {

//     // Object inside object

//     street: "123 Main St",

//     city: "New York",

//   },

// };

// console.log(student.grades[0]); // 85

// console.log(student.address.city); // 'New York'

// ////////////////////////////////////

// // Object Methods

// // const jonas = {

// //   firstName: "Jonas",

// //   lastName: "Schmedtmann",

// //   birthYear: 1991,

// //   job: "teacher",

// //   friends: ["Michael", "Peter", "Steven"],

// //   hasDriversLicense: true,

// //   // Method - function inside object

// //   calcAge: function (birthYear) {

// //     return 2037 - birthYear;

// //   },

// // };

// // Call methods using dot notation

// console.log(jonas.calcAge(1991)); // 46

// console.log(jonas.calcAge(jonas.birthYear)); // Same result

// const jonasImproved = {

//   firstName: "Jonas",

//   lastName: "Schmedtmann",

//   birthYear: 1991,

//   job: "teacher",

//   friends: ["Michael", "Peter", "Steven"],

//   hasDriversLicense: true,

//   calcAge: function () {

//     console.log(this); // Shows the jonas object

//     return 2037 - this.birthYear; // Access own birthYear!

//   },

// };

// console.log(jonasImproved.calcAge()); // 46

// const jonasAdvanced = {

//   firstName: "Jonas",

//   lastName: "Schmedtmann",

//   birthYear: 1991,

//   job: "teacher",

//   friends: ["Michael", "Peter", "Steven"],

//   hasDriversLicense: true,

//   calcAge: function () {

//     this.age = 2037 - this.birthYear; // Store result as new property

//     return this.age;

//   },

//   getSummary: function () {

//     return `${this.firstName} is a ${this.calcAge()}-year old ${

//       this.job

//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;

//   },

// };

// console.log(jonasAdvanced.calcAge()); // 46

// console.log(jonasAdvanced.age); // 46 (now stored as property)

// console.log(jonasAdvanced.getSummary()); // Full description

// Hour 4

// let method
// querySelector - uses css selectors

const message = document.querySelector(".message");
console.log(message);

const button = document.querySelector("#btn");
console.log(button);

const heading = document.querySelector("h1");
console.log(heading);

console.log(message.textContent);
console.log(button.id);
console.log(heading.textContent);

// getElementById
const buttonById = document.getElementById("btn");
console.log(buttonById);
console.log(buttonById === button);

// querySelectorAll
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);
console.log(allParagraphs[0]);

// Modifying Elements
console.log(message.textContent);
message.textContent = "Hello From JavaScript!";
console.log(message.textContent);

// innerHTML
message.innerHTML = "<strong>Bold text from JS!</strong>";

// innerText
console.log(message.innerText);

// Input Element Values
const input = document.querySelector(".guess");

console.log(input.value);
input.value = "Default text";

heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "3rem";

button.style.padding = "20px";
button.style.borderRadius = "10px";

// Event Listeners
button.addEventListener("click", function () {
  console.log("Button was clicked!");
  message.textContent = "Button Clicked!";
  message.style.color = "blue";
});

let clickCount = 0;
button.addEventListener("click", function () {
  clickCount++;
  button.textContent = `Clicked ${clickCount} times`;
  button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
});

const display = document.querySelector(".message");
input.addEventListener("input", function () {
  const userText = input.value;
  display.textContent = `you typed: ${userText}`;
  display.style.fontSize = `${userText.length + 10}px`;
});

// keydown events - respond to a specific key
input.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);

  if (event.key === "Enter") {
    display.textContent = `You pressed Enter! Test Was ${input.value}`;
    input.value = ""; // clear input
  }
});
