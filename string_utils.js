(function(){
  'use strict';

  function StringUtils (string, num, direction, spacer) {
    this.string = string;
    this.num = num;
    this.direction = direction;
    this.spacer = spacer;
  }

  StringUtils.prototype.banner = function (string, num) {
    // uppercase the string
    var uppercase = string.toUpperCase();
    // add the specified number of exclamation points to both sides of the string
    var exclamation = "!".repeat(num);

    return exclamation + uppercase + exclamation;
  };

  StringUtils.prototype.justify = function (string, direction, num, spacer) {
    if (direction === 'right') {
      return spacer * num + string;
    } else {
      return string + spacer.repeat(num-string.length);
    }
  };

module.exports = StringUtils;

})();


