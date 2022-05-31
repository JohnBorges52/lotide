const head = function(argument) {
  if (argument !== undefined) {
    return argument[0];
  } else {
    return undefined;
  }

};

const assertEqual = function(actual, expected) {
  
  if (actual  === expected) {
    console.log(`✅  ${actual} === ${expected}`);
  } else {
    console.log(`❌ ${actual} !== ${expected}`);
  }
};







assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");