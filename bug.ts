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

// Uncommon error: Type 'string' is not assignable to type 'number'.
// The error message above may seem strange because the type of result3 is number, which is correct

const result4 = add(result1, "hello"); // This will not compile
// Because typescript will not implicitly convert the string to number