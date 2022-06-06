const middle = require(`../middle`);
const assertArraysEqual = require(`../assertArraysEqual`);

const arrayOdd = [1,5,5,8,5,6,7,8,0];
const arrayEven = [1,2,3,4,5,6];
console.log(assertArraysEqual(middle(arrayEven), [3]));