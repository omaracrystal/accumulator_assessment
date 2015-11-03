// HINT: your code will need to export an object
// that has two properties that are functions

var stringUtils = require('./string_utils');

describe('stringUtils', function () {

  describe('#banner', function () {

    it('turns the given text into a banner', function () {
      // uppercase the string
      // add the specified number of exclamation points to both sides of the string

      expect(stringUtils.banner('hello', 4)).toEqual("!!!!HELLO!!!!");

      expect(stringUtils.banner('good times', 2)).toEqual("!!GOOD TIMES!!");
    });

  });

  describe('#justify', function () {

    it('can justify text to the left with the given spacer', function () {
      expect(stringUtils.justify('$12.98', 'left', 10, ' ')).toEqual("$12.98    ");

      expect(stringUtils.justify('$12.98', 'left', 10, '-')).toEqual("$12.98----");

      expect(stringUtils.justify('hi', 'left', 15, '+')).toEqual("hi+++++++++++++");
    });

    it('can justify text to the right with the given spacer', function () {
      expect(stringUtils.justify('$12.98', 'right', 10, ' ')).toEqual("    $12.98");

      expect(stringUtils.justify('$12.98', 'right', 10, '-')).toEqual("----$12.98");

      expect(stringUtils.justify('hi', 'right', 15, '+')).toEqual("+++++++++++++hi");
    });

  });

});
