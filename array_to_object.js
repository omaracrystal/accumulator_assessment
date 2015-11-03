(function () {

  'use strict';

  function arrayToObject (input) {
    //turns arrays of arrays into objects
    //uses the last key/value when there are duplicates
    return input.reduce(function(result, currentArray) {
        result[currentArray[0]] = currentArray[1];
        return result;
    }, {});
  }

  module.exports = arrayToObject;

})();

