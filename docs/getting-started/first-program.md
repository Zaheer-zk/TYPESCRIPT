## Definition

TypeScript is a statically-typed superset of JavaScript. This means that all valid JavaScript is also valid TypeScript. The primary difference is that TypeScript supports static typing, allowing you to specify the type of a variable, function, class, etc. TypeScript is then transpiled to plain JavaScript.

```typescript
let message: string = 'Hello world!';

function logMessage(message: string) {
  console.log(message);
}

logMessage(message);
