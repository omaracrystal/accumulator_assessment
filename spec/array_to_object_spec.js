var arrayToObject = require('../array_to_object');

describe('#arrayToObject', function () {

  it('turns arrays of arrays into objects', function () {

    var input = [ ['bert', 'ernie'], ['higgs', 'boson'], ['ben', 'jerry'] ];

    var expectedOutput = {
      bert: 'ernie',
      higgs: 'boson',
      ben: 'jerry',
    };

    expect(arrayToObject(input)).toEqual(expectedOutput);

  });

  it('uses the last key/value when there are duplicates', function () {

    var input = [ ['ben', 'jerry'], ['ben', 'big'], ['higgs', 'boson'] ];

    var expectedOutput = {
      ben: 'big',
      higgs: 'boson',
    };

    expect(arrayToObject(input)).toEqual(expectedOutput);

  });

});
