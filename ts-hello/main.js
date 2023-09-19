"use strict";
// let message: string = 'Hello world!';
Object.defineProperty(exports, "__esModule", { value: true });
// function logMessage(message: string) {
//   console.log(message);
// }
// logMessage(message);
// ##############
// #### TYPE ####
// ##############
// let count = 0;
// count = 'a'; // Not valid for typescript but valid for javascript
// let count: string = '0'; // Defining the variable data type
// const obj = {
//   key: 'count',
// };
// enum Color {
//   blue,
//   black,
//   red,
//   green,
//   yellow,
// }
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
// ########################
// #### TYPE ASSERTION ####
// ########################
// let message;
// message = 'abc';
// let endsWith = (<string>message).endsWith('c');
// console.log(endsWith);
// let alternativeWay = (message as string).endsWith('c');
// console.log(alternativeWay);
// #####################
// ##### INTERFACES ####
// #####################
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
// We divide your program in multiple files in each file we import one or more files code which are exported.
var point_1 = require("./point");
var getData = new point_1.Point(10, 10);
getData.draw();
