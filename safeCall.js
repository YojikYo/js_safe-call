'use strict';

// function for point №1:
//
// const safeCall = someFunction => {
//   try {
//     someFunction();
//     return true;
//   } catch {
//     return false;
//   }
// }

// function for point №2:
//
function safeCall(thisArg, ...args) {
  try {
    const callResult = this.call(thisArg, ...args);
    return callResult;
  } catch {
    return null;
  }
}

Function.prototype.__proto__ = { safeCall: safeCall, };

// console.log(Array.prototype.splice.call("[1,2,3]", 0, 2));
console.log(Array.prototype.splice.safeCall("[1,2,3]", 0, 2));
console.log(Array.prototype.splice.call([1,2,3], 0, 2));
console.log(Array.prototype.splice.safeCall([1,2,3], 0, 2));
