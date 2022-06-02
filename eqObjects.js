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
;
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅  ${actual} === ${expected}`);
  } else {
    console.log(`❌ ${actual} !== ${expected}`);
  }
};

const eqObjects = function(obj1,obj2) {
  let keysOfObj1 = Object.keys(obj1); // []
  let keysOfObj2 = Object.keys(obj2); // []

  let result = keysOfObj1.length === keysOfObj2.length;
  
  if (result){
    for (const key1 of keysOfObj1) {
      for (const key2 of keysOfObj2) {
        if (eqArrays(obj1[key1],obj2[key2]) && (eqArrays(key1,key2))) {
          result = true;
          break
        } else {
          result = false
        }
      }  
    }  
  }
  return result
}; 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual((eqObjects(cd, dc)), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual((eqObjects(cd, cd2)), false); // => false

// console.log( "---")

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false