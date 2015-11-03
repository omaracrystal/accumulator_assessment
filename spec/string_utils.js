(function(){
  'use strict';

  function banner (string, num) {
    // uppercase the string
    var uppercase = string.toUpperCase();
    // add the specified number of exclamation points to both sides of the string
    var exclamation = "!".repeat(num);
    return exclamation + uppercase + exclamation;
  }

  function justify (string, direction, num, spacer) {
    if (direction === 'right') {
      return spacer.repeat(num-string.length) + string;
    } else {
      return string + spacer.repeat(num-string.length);
    }
  }

module.exports = {
  banner : banner,
  justify : justify
};

})();


