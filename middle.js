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



const assertArraysEqual = function(array1, array2) {
  
  let result = '';
  if (eqArrays(array1, array2)) {
    result = 'Both of them are equal';
  } else {
    result = 'They are not equal';
  }
  return result;
};



const middle = function(array) {
  
  let result = [];
  
  if (array.length <= 2) {
    result = false;
  } else if (array.length > 2 && array.length % 2 === 0) {
    result.push(array[(array.length / 2) - 1]);
    result.push(array[array.length / 2]);
  } else if (array.length > 2 && array.length % 2 !== 0) {
    result.push(array[Math.floor(array.length / 2)]);
  }
  return result;
};


const arrayOdd = [1,5,5,8,5,6,7,8,0];
const arrayEven = [1,2,3,4,5,6];
console.log(middle(arrayOdd));