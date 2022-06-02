const letterPositions = function(sentence) {
  const results = {};

  for (let index in sentence) {
    
    const letter = sentence[index];
    const i = parseInt(index);
    
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }

  return results;
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



console.log(assertArraysEqual(letterPositions("hello").e, [1]));