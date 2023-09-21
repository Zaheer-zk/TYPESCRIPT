## Definition

TypeScript provides several basic data types which allow you to specify the type of variables, function parameters, and return values. These types are more or less extensions of JavaScript's basic types.

```typescript
let count = 0;
count = 'a'; // Not valid for typescript but valid for javascript
let count: string = '0'; // Defining the variable data type

let isDone: boolean = false;
let decimal: number = 6;
let color: string = 'blue';
let notSure: any = 4; // can be reassigned to any type
