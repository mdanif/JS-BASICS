// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true);

// Example AND
let highIncome = true;
let goodCreditScore = true;
let eleigibleForLoan = highIncome && goodCreditScore;

console.log(eleigibleForLoan);

/*-----------------------------------------------------------------------*/

// Logical OR (||)
// Returns TRUE if one operands are TRUE
console.log(false || true);

// Example OR
let highIncome = false;
let goodCreditScore = true;
let eleigibleForLoan = highIncome || goodCreditScore;

console.log(eleigibleForLoan);

/*-----------------------------------------------------------------------*/

// Logical NOT (!)
// Example NOT
let highIncome = false;
let goodCreditScore = false;
let eleigibleForLoan = highIncome || goodCreditScore;

console.log('Eligible',eleigibleForLoan);


let applicationRefused = !eleigibleForLoan;
console.log('Application Refused', applicationRefused);