## Definition

Interfaces in TypeScript are a powerful way to define contracts for the shape of objects. They allow you to define what properties and methods an object should have, ensuring that objects adhere to a specific structure.

```typescript
interface Point {
  x: number;
  y: number;
}

const point = (point: Point) => {
  // ...
  console.log(point);
};

point({
  x: 0,
  y: 0,
});

interface Person {
  firstName: string;
  lastName: string;
  age?: number; // This is an optional property
}

function displayPerson(p: Person) {
  console.log(p.firstName + ' ' + p.lastName);
}

//* Usage
let john: Person = { firstName: 'John', lastName: 'Doe' };
displayPerson(john);

interface Person {
  name: string;
  age: number;
}

interface Student {
  name: string;
  age: number;
  rollN0: number;
}

let zaheer: Person | Student;

zaheer = {
  name: 'ZAheer',
  age: 22,
};
console.log(zaheer); // { name: 'ZAheer', age: 22 }

zaheer = {
  name: 'Zaheer',
  age: 22,
  rollN0: 40,
};
console.log(zaheer); // { name: 'Zaheer', age: 22, rollN0: 40 }
