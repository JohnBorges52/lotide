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



let newArray = []
const flatten = function(arrayhere) {

    
  for (let item of arrayhere){
    if(Array.isArray(item)){

      flatten(item)
      
    } else{
      newArray.push(item)  
    }
  }


    return newArray

};

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])) // => [1, 2, 3, 4, 5, 6]