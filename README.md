# TypeScript Type Mismatch Bug
This repository demonstrates an uncommon TypeScript error related to type checking and implicit type coercion.  The error message can be confusing, especially for those new to TypeScript.

## Description
The bug highlights how TypeScript's strict type system prevents implicit type conversions.  Even if the expected result is numerically correct, TypeScript will throw an error if types don't match exactly.

## How to Reproduce
1. Clone this repository.
2. Compile the TypeScript code using `tsc bug.ts`.
3. Observe the error message.

## Solution
The solution involves explicit type conversion or using type guards to ensure that the data being used has the expected type.

## Learning Points
This example underscores the importance of understanding TypeScript's type system and the benefits it provides in terms of catching potential errors at compile time.