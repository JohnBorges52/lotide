const assertEqual = function(actual, expected) {
  
  if (actual  === expected) {
    console.log(`✅  ${actual} === ${expected}`);
  } else {
    console.log(`❌ ${actual} !== ${expected}`);
  }
};


const tail = function(words) {
  let empty = [];
  if (words.length > 1) {
    return words.slice(1);
  } else {
    return empty;
  }
};
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);