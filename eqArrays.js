const eqArrays = function(array1,array2) {
  let result1 = [];

  for (let i = 0; i < array1.length; i++) {
  
    if (array1[i] !== array2[i]) {
      result1.push('false');
    } else {
      result1.push('true');
    }
  }

  if (result1.indexOf('false') === -1) {
    return true;
  } else {
    return false;
  }

};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅  ${actual} === ${expected}`);
  } else {
    console.log(`❌ ${actual} !== ${expected}`);
  }
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false