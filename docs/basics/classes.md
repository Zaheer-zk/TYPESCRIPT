## Class Example

```typescript
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) { 
    // (x?: number, y?: number) "?" used for optional
    this.x = x;
    this.y = y;
  }

  draw() {
    // ...
    console.log(this.x, this.y);
  }
}

const getData = new Point(10, 11); // object (Instance of Point class)
getData.draw();

interface ICar {
  brand: string;
  model: string;
}

class Car implements ICar {
  constructor(public brand, public model) {}

  getCarName() {
    console.log(this.brand);
  }
}

const carA = new Car('Audi', 'A5');
carA.getCarName(); // Audi
