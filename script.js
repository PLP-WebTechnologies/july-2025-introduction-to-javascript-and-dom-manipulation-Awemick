// Part 1: Variable Declarations & Conditionals

let userName = "Kasongo";
let userAge = 21;

// Conditional logic
if (userAge >= 18) {
    console.log(`${userName} is an adult.`);
    document.getElementById("part1").textContent = `${userName} is an adult.`;
} else {
    console.log(`${userName} is a minor.`);
    document.getElementById("part1").textContent = `${userName} is a minor.`;
}

// Part 2: Custom Functions

// Function 1: Greeting
function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript 101.`;
}

// Function 2: Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Test functions
console.log(greet(userName));
console.log(`5 + 10 = ${addNumbers(5, 10)}`);

// Part 3: Loop Examples


// Loop Example 1: For loop
for (let i = 0; i < 3; i++) {
    console.log(`For loop iteration: ${i}`);
}

// Loop Example 2: While loop
let j = 0;
while (j < 3) {
    console.log(`While loop iteration: ${j}`);
    j++;
}

// Part 4: DOM Interactions

// 1. Change text content dynamically
document.getElementById("maintext").textContent = "DOM content updated via JS!";

document.getElementById("maintext").style.color = "#007acc";
document.getElementById("maintext").style.fontWeight = "bold";

// 3. Add click event listener to button
document.getElementById("button").addEventListener("click", function() {
    alert("Button clicked! Great job interacting with the DOM.");

    document.getElementById("maintext").textContent = "You clicked the button!";
});
