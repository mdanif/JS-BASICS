// Function with input
function greet(name){  // And the 'name' is variable and refer as parameter
    console.log('Hello ' + name);
}

greet('irshad');  // Irshad is a argument
greet('Ali');  // Function may have multiples


// A function is set of statements for Performing a task or Calculating a value
 
// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName); // + for concadinate two strings
}

greet('irshad', 'ali');


// Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));
