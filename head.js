const assertEqual = require('./assertEqual');

const head = function(argument) {
  if (argument !== undefined) {
    return argument[0];
  } else {
    return undefined;
  }

};

module.exports = head;






