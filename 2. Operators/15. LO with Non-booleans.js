
// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN


// Anything that is not Falsy -> Truthy

// Short-circuting
console.log(false || 1 || 2 || 1) // Evolouations will stop at true

// Example
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);