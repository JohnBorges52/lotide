const without = function(array, itemsToRemove) {
 
  let arrayNew = [];

  for (let i = 0; i < array.length; i++) {
    if (itemsToRemove.indexOf(array[i]) === -1) {
      arrayNew.push(array[i]);
    }
  }
  
  return arrayNew;

};


const assertArraysEqual = function(array1, array2) {
  
  let result = '';
  if (eqArrays(array1, array2)) {
    result = 'Both of them are equal';
  } else {
    result = 'They are not equal';
  }
  return result;
};


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
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);