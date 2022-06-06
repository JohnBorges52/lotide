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

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅  ${actual} === ${expected}`);
  } else {
    console.log(`❌ ${actual} !== ${expected}`);
  }
};

module.exports = eqArrays;

