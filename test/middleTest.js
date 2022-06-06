const assert = require(`chai`).assert;
const middle = require (`../middle`);
// const assertArraysEqual = require(`../assertArraysEqual`);

describe('#middle', () => {
  it("returns 5 of [1,5,5,8,5,6,7,8,0]", () => {
    assert.deepEqual(middle([1,5,5,8,5,6,7,8,0]),[5])
  });
  it("returns 2,3 of [1,2,3,4]" , () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3])
  });
  it("returns [] of []" , () => {
    assert.deepEqual(middle([]),[])
  });
});






// const arrayOdd = [1,5,5,8,5,6,7,8,0];
// const arrayEven = [1,2,3,4,5,6];
// console.log(assertArraysEqual(middle(arrayEven), [3]));