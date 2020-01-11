import * as myModule from './my-module.js'; // Importing an entire module 
// import {thisIsWayTooLongOfAName as shortName, PI} from './my-module.js'
// import circleArea from './circle.js';
import { default as circleArea } from './circle';

console.log( myModule.PI );
myModule.doSomething();
myModule.doSomethingElse();
new myModule.MyClass();
// myModule.somethingPrivate();

console.log( circleArea(4) );