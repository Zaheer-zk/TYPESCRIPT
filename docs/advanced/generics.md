## Generics in TypeScript

Generics provide a way to create reusable components that can work over a variety of types rather than a single one.

### Basic Generic Function
Using generics, you can specify the type of function arguments and return values.

```typescript
function gen<T>(a: T, b: T): T[] {
  return [a, b];
}

console.log(gen<number>(2, 4));               // [2, 4]
console.log(gen<string>('2', '4'));          // [ '2', '4' ]
console.log(gen<any>('2', '4'));             // [ '2', '4' ]
console.log(gen<Array<string>>(['2'], ['4'])); // [ [ '2' ], [ '4' ] ]

function addUser<T extends { id: string }>(user: T) {
  return user.id;
}

const result = addUser({ id: '1234' });
console.log(result); // Outputs: 1234

function addUser<T extends { id: string; name?: string }>(user: T) {
  return [user.id, user.name];
}

const anotherUser = {
  id: '5678',
  name: 'John Doe',
};

const anotherResult = addUser(anotherUser);
console.log(anotherResult); // Outputs: [5678, 'John Doe']
