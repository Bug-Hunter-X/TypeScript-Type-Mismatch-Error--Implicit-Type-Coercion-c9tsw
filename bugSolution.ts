function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 4); // 6
const result3 = add(result1, result2); // 14

console.log(result3); // This works fine

// Solution 1: Explicit type conversion
const result4 = add(result1, parseFloat("10")); //This will compile

//Solution 2: Type Guard
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

const value = "10";
if(isNumber(value)){
    const result5 = add(result1, value)
}
console.log(result4); //This also works fine