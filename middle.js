const eqArrays = function(array1,array2) {
  let result = array1.length === array2.length;
  
  if(result){
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      result = false;
    } else {
      result = true;
    }
  }
  return result  
}
}

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
    result = [];
  } else if (array.length > 2 && array.length % 2 === 0) {
    result.push(array[(array.length / 2) - 1]);
    result.push(array[array.length / 2]);
  } else if (array.length > 2 && array.length % 2 !== 0) {
    result.push(array[Math.floor(array.length / 2)]);
  }
  return result;
};

module.exports = middle;