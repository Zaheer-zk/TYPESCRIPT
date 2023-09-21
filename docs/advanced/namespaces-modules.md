## Modular Programming

In TypeScript, you can organize your program by dividing it into multiple files. Within each file, you can import code from other files that are exported.

```typescript
import { Point } from './point';

const getData = new Point(10, 10);
getData.draw();
