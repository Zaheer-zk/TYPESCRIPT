/**
 * Definition: TypeScript is a statically-typed superset of JavaScript. This means
 * that all valid JavaScript is also valid TypeScript. The primary difference is
 * that TypeScript supports static typing, allowing you to specify the type of a
 * variable, function, class, etc. TypeScript is then transpiled to plain JavaScript.
 */

// let message: string = 'Hello world!';

// function logMessage(message: string) {
//   console.log(message);
// }

// logMessage(message);

// ###################
// #### FUNCTIONS ####
// ###################

/**
 * Definition: In TypeScript, you can specify type annotations for function
 * parameters and return types. This adds an extra layer of safety by ensuring
 * that functions are called with the correct argument types and return the expected type of value.
 */

// function greet(name: string): string {
//   return 'Hello, ' + name + '!';
// }

//* Usage
// let message: string = greet('Alice');

// ##############
// #### TYPE ####
// ##############

/**
 * Definition: TypeScript provides several basic data types which allow you to
 * specify the type of variables, function parameters, and return values. These
 * types are more or less extensions of JavaScript's basic types.
 */

// let count = 0;
// count = 'a'; // Not valid for typescript but valid for javascript
// let count: string = '0'; // Defining the variable data type

// let isDone: boolean = false;
// let decimal: number = 6;
// let color: string = 'blue';
// let notSure: any = 4; // can be reassigned to any type

// const obj = {
//   key: 'count',
// };

// ##############
// #### ENUM ####
// ##############
/**
 * Definition: Enums allow you to define a set of named constants. Using enums can
 * make it easier to document and ensure valid values for particular sets.
 */

// enum Color {
//   blue = 'blue',
//   black = 'black',
//   red = 'red',
//   green = 'green',
//   yellow = 'yellow',
// }
// By default the value will set as starting from 0 to the key size.
/**
 * enum Color
{ 0: 'blue',
  1: 'black',
  2: 'red',
  3: 'green',
  4: 'yellow',
  blue: 0,
  black: 1,
  red: 2,
  green: 3,
  yellow: 4 }
 */

// console.log(obj);
// console.log(Color);
// console.log(Color.blue);

// #### UNION DATA TYPE ####
// let a: string | number;
// a = 'a';
// console.log(a); // a == 'a'
// a = 0;
// console.log(a); // a == 0

// #### TYPE ALIASES ####
/**
 * Definition: Type aliases allow you to create a new name for a type.
 * They are similar to interfaces in many ways, but they can represent any type,
 * not just object types. You can use type aliases with primitives, unions, tuples,
 * and any other types that you'd like to create.
 */

// type canBeNoOrStr = string | number;
// let a: canBeNoOrStr;
// a = 'string'; // valid
// a = 10; // valid
// a = true; // not-valid

// type cantBeNoOrStr = string & number;

// let a: cantBeNoOrStr;
// a = 'a'; // can't be added.

// type StringOrNumber = string | number;

// let myVar: StringOrNumber;
// myVar = 'Hello'; // Valid
// myVar = 123; // Valid
// myVar = true;  // Error

// ########################
// #### TYPE ASSERTION ####
// ########################

// let message;
// message = 'abc';
// let endsWith = (<string>message).endsWith('c');
// console.log(endsWith);
// let alternativeWay = (message as string).endsWith('c');
// console.log(alternativeWay);

// ###############
// #### ARRAY ####
// ###############
/**
 * Definition: Just like in JavaScript, you can work with arrays of values in
 * TypeScript. However, with TypeScript, you can also specify the type of elements
 * contained in the array.
 */

// let list1: number[] = [1, 2, 3];
// let list2: Array<number> = [1, 2, 3]; // Alternate syntax using generics

// #####################
// ##### INTERFACES ####
// #####################
/**
 * Definition: Interfaces in TypeScript are a powerful way to define contracts for
 * the shape of objects. They allow you to define what properties and methods an
 * object should have, ensuring that objects adhere to a specific structure.
 */

// interface Point {
//   x: number;
//   y: number;
// }

// const point = (point: Point) => {
//   // ...
//   console.log(point);
// };

// point({
//   x: 0,
//   y: 0,
// });

// interface Person {
//   firstName: string;
//   lastName: string;
//   age?: number; // This is an optional property
// }

// function displayPerson(p: Person) {
//   console.log(p.firstName + ' ' + p.lastName);
// }

//* Usage
// let john: Person = { firstName: 'John', lastName: 'Doe' };
// displayPerson(john);

// #### INTERSECTION IN INTERFACE ####
// interface Person {
//   name: string;
//   age: number;
// }

// interface Student {
//   name: string;
//   age: number;
//   rollN0: number;
// }

// let zaheer: Person | Student;

// zaheer = {
//   name: 'ZAheer',
//   age: 22,
// };
// console.log(zaheer); // { name: 'ZAheer', age: 22 }

// zaheer = {
//   name: 'Zaheer',
//   age: 22,
//   rollN0: 40,
// };
// console.log(zaheer); // { name: 'Zaheer', age: 22, rollN0: 40 }

// ##################
// #### Classes #####
// ##################

// class Point {
//   x: number;
//   y: number;

//   constructor(x: number, y: number) {
// (x?: number, y?: number) "?" used for optional
//     this.x = x;
//     this.y = y;
//   }

//   draw() {
//     // ...
//     console.log(this.x, this.y);
//   }
// }

// const getData = new Point(10, 11); // object (Instance of Point class)
// getData.draw();

// #### INTERFACE IN CLASS ####

// interface ICar {
//   brand: string;
//   model: string;
// }

// class Car implements ICar {
//   constructor(public brand, public model) {}

//   getCarName() {
//     console.log(this.brand);
//   }
// }

// const carA = new Car('Audi', 'A5');
// carA.getCarName(); // Audi

// #################
// #### OBJECTS ####
// #################

// const getData = new Point(10, 11); // object (Instance of Point class)
// getDate.x = 2;
// getDate.y = 2;
// Able to access properties because they are public

// #########################
// #### ACCESS MODIFIER ####
// #########################

// class Point {
//   private x: number;
//   private y: number;
//  NOTE: after adding private access modifiers so we can't access these field
// using object.

//   constructor(x: number, y: number) {
// (x?: number, y?: number) "?" used for optional
//     this.x = x;
//     this.y = y;
//   }

//   draw() {
//     // ...
//     console.log(this.x, this.y);
//   }
// }

// ####################
// #### PROPERTIES ####
// ####################
// class Point {
//   constructor(private _x?: number, private _y?: number) {}

//   get x() {
//     return this._x ?? 0;
//   }

//   set x(value: number) {
//     this._x = value;
//   }

//   draw() {
//     // ...
//     console.log(this._x, this._y);
//   }
// }

// const getData = new Point();
// getData.x = 10;
// let x = getData.x;
// console.log(x);
// getData.draw();

// #################
// #### MODULES ####
// #################
// We divide your program in multiple files in each file we import one or more files code
// which are exported.

// import { Point } from './point';

// const getData = new Point(10, 10);
// getData.draw();

// ################
// #### TUPLES ####
// ################
/**
 * Definition: A tuple is a TypeScript type that allows you to express an array
 * with a fixed number of elements whose types are known, but they do not need to
 * be the same. It's like a mix between arrays and objects.
 */
// Strict to assigned type and length
// let address: [string, number, number];
// address = ['Zaheer', 22, 2];

// let obj: { name: string };
// obj = { name: 'Zaheer' };

// let obj2: { name: string; age?: number };
// obj2 = { name: 'Zaheer' };
// obj2 = { name: 'Zaheer', age: 22 };

// ##################
// #### GENERICS ####
// ##################
// To add explicit type
// function gen<T>(a: T, b: T): T[] {
//   return [a, b];
// }

// console.log(gen<number>(2, 4)); // [2, 4]
// console.log(gen<string>('2', '4')); // [ '2', '4' ]
// console.log(gen<any>('2', '4')); // [ '2', '4' ]
// console.log(gen<Array<string>>(['2'], ['4'])); // [ [ '2' ], [ '4' ] ]

// function addUser<T extends { id: string }>(user: T) {
//   return user.id;
// }

// const result = addUser({ id: '1234' });
// console.log(result); // Outputs: 1234

// function addUser<T extends { id: string; name?: string }>(user: T) {
//   return [user.id, user.name];
// }

// const anotherUser = {
//   id: '5678',
//   name: 'John Doe',
// };

// const anotherResult = addUser(anotherUser);
// console.log(anotherResult); // Outputs: [5678, 'John Doe']

// #########################
// #### Any vs. Unknown ####
// #########################

// let aValue: any = 'hello';
// aValue = 42; // No error

// let uValue: unknown = 'world';
//* uValue = uValue + "!";  // Error! You can't perform operations without type-checking.
// if (typeof uValue === 'string') {
//   uValue: string = uValue + '!'; // This is fine since we've checked the type.
// }
