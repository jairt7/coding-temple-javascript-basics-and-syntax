// Understanding Data Types in JavaScript

// Task 1: Declare variables to represent student information such as name, age, grade, and attendance status.
let studentName;
let studentAge;
let studentGrade;
let isPresent;
// Task 2: Assign sample values to the student information variables.
studentName = "Alice";
studentAge = 15;
studentGrade = 10;
isPresent = true;
// Task 3: Display the student information using console.log() statements.
if (isPresent) {
    console.log("Student", studentName, "is", studentAge, "years old, has a grade of", studentGrade, "and they are present.")
}

else {
    console.log("Student", studentName, "is", studentAge, "years old, has a grade of", studentGrade, "and they are not present.")
}

// Exploring JavaScript Operators

// Task 1: Declare variables to store two numeric values for performing arithmetic operations.
let num1;
let num2;
// Task 2: Assign sample numeric values to the variables declared in Task 1.
num1 = 4;
num2 = 5;
// Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
// Task 4: Explore assignment operators and update the values of variables.
console.log("Updated num1:", num1 += 2)
console.log("Updated num2:", num2 -= 2)
// I'm not sure which assignment operators I'm supposed to use so I just picked two at random
// Task 5: Use comparison operators to compare the values of variables.
console.log("Is num1 equal to num2?");
if (num1 == num2) {
    console.log("Yes.")
}
else {
    console.log("No.")
}
console.log("Is num1 greater than num2?");
if (num1 > num2) {
    console.log("Yes.")
}
else {
    console.log("No.")
}
console.log("Is num1 not equal to num2?");
if (num1 != num2) {
    console.log("Yes.")
}
else {
    console.log("No.")
}
// Task 6: Apply logical operators to combine conditions and display the results.
let isPositive = num1 > 0 && num2 > 0;
let isEven = num1 % 2 == 0 || num2 % 2 == 0;
if (isPositive) {
    console.log("Both numbers are positive.")
}
else {
    console.log("One or both of the numbers is not positive.")
}
if (isEven) {
    console.log("One or both of the numbers is even.")
}
else {
    console.log("Neither of the numbers is even.")
}