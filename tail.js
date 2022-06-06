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

module.exports = tail;