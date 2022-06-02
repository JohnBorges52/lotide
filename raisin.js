const raisinAlarmArray = function(cookies) {
  let result = []
  for( let i=0; i< cookies.length; i++) {
    if (cookies[i].indexOf('🍇') === -1) {
      result.push("Thats Good!")
    } else {
      result.push("Thats Bad!")
    }
  }
  return result;
};

console.log(raisinAlarmArray([["🍫", "🍫", "🍇", "🍫"],["🍫", "🍇", "🍫", "🍫", "🍇"], ["🍫", "🍫", "🍫"]]
));