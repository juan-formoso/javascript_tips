/* Complete Guide to Vanilla JavaScript Mastery */

/* 
Introduction & Basics:
  Used to make webpages interactive

Filetype:
  Files aare saved as [filename].js

First Program:
  console.log("Hello World!");

How to run JS:
  1. Install node.js.
  2. Run "node [filename].js" in the terminal.
  3. Look at the Browser's Console.

Add JS to HTML file:
  1. External JS
  2. Inline JS
  3. Embedded JS
*/

/* VARIABLES */
let name = "John"; // let
var age = 35; // var (old way)
const pi = 3.14; // const

/* LOOPS (semicolon is not mandatory) */

// for loop
for (let i = 0; i < 10; i += 1) {
  console.log(i);
} // for(begin; condition; increment) { code here }

// while loop
let i = 0;
while (i < 10) {
  console.log(i);
  i += 1;
} // while(condition) { code here }

/* FUNCTIONS */

/* There are 2 ways to write functions: */

// 1. Regular function
function sayHello() {
  console.log("Hello");
}

// 2. Arrow function
const sayHello = () => {
  console.log("Hello");
};

/* CLASSES */

// Code template used to create Objects
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
  myAge() {
    console.log(`I'm ${this.age} years old`);
  }
}

let user = new User("John", 35);
user.sayHi(); // Hi, I'm John
user.myAge(); // I'm 35 years old

/* OBJECTS */

// Stores value like a dictionary
let person = {
  name: "John",
  age: 35,
};

/* JSON */

// JavaScript Object Notation
// Used to store data in a file

{
  "name": "John",
  "age": 35,
}

/* RegEx */

// Sequence of Characters that forms a search pattern
regexp = new RegExp("pattern", "flags");

/* Error Handling */

// Allows us to handle errors in a program
try {
  // code here
} catch (error) {
  // handle error
}

/* MODULE */

// Helps us to split JS code into multiple files
<script type="module">...</script>

/* DOM */

// Document Object Model
// It is known as the 'Entry point' to the page
const element = document.getElementById("intro");

/* BOM */

// Browser Object Model
// Envets are "things" that happen to elements.
// Supoose, you click on a button and something happens. This is a click event.

// Select a DOM element
let button = document.querySelector("button");

// Add an event listener
button.addEventListener("click", () => {
  // do something
  btn.innerHTML = "Clicked!";
  btn.style.backgroundColor = "red";
});
