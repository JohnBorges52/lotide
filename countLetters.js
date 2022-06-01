const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅  ${actual} === ${expected}`);
  } else {
    console.log(`❌ ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {
  let newString = '';
  let result =  {};

  for (let letter of sentence) {
    if (letter !== ' ') {
      newString += letter;
    }
  }

  for (let key of newString) {
    if (result[key]) {
      result[key] += 1;
    } else {
      result[key] = 1;
    }
  }

  return result;

};

const result1 = countLetters("heeeeeeeeeelllloo Worrrrlds");

assertEqual(result1['l'],10);