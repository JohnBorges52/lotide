const assert = require('chai').assert;
const tail = require(`../tail`);
const assertEqual = require(`../assertEqual`);

describe('#tailTest', () => {
  
  it("should return ['house', 'labs', 'is', 'good'] of ['ligth','house', 'labs', 'is', 'good']", () => {
    assert.deepEqual(tail(['light', 'house', 'labs', 'is', 'good']), ['house', 'labs', 'is', 'good'])
  
  });
  it("should return [] of ['hello]", () => {
    assert.deepEqual(tail(['Hello']), [])
  });
});




