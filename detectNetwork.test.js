/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });


describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345367890123') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });


});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  const assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // MasterCard network always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  const expect = chai.expect;

  for (let prefix = 51; prefix <= 55; prefix++) {
    (function() {
        it(`has a prefix of ${prefix} and a length of 19`, function() {
          expect(detectNetwork(`${prefix}11111111111111`)).to.equal('MasterCard');
        });
    })()
  };

  // it('has a prefix of 51 and a length of 16', function() {
  //   expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  // });

  // it('has a prefix of 52 and a length of 16', function() {
  //   expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  // });

  // it('has a prefix of 53 and a lenght of 16', function() {
  //   expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  // });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  // const should = chai.should();

  // it('has a prefix of 54 and a length of 16', function() {
  //   detectNetwork('5412345678901234').should.equal('MasterCard');
  // });

  // it('has a prefix of 55 and a length of 16', function() {
  //   detectNetwork('5512345678901234').should.equal('MasterCard');
  // })

});

describe('Discover', function() {

  const expect = chai.expect;
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!

  // Discover network always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  for (let prefix = 6011; prefix <= 6011; prefix++) {
    (function() {
        it(`has a prefix of ${prefix} and a length of 16`, function() {
          expect(detectNetwork(`${prefix}111111111111`)).to.equal('Discover');
        });
    })()
  };

  for (let prefix = 6011; prefix <= 6011; prefix++) {
    (function() {
        it(`has a prefix of ${prefix} and a length of 19`, function() {
          expect(detectNetwork(`${prefix}111111111111111`)).to.equal('Discover');
        });
    })()
  };

  for (let prefix = 644; prefix <= 649; prefix++) {
    (function() {
        it(`has a prefix of ${prefix} and a length of 16`, function() {
          expect(detectNetwork(`${prefix}1111111111111`)).to.equal('Discover');
        });
    })()
  };

  for (let prefix = 644; prefix <= 649; prefix++) {
    (function() {
        it(`has a prefix of ${prefix} and a length of 19`, function() {
          expect(detectNetwork(`${prefix}1111111111111111`)).to.equal('Discover');
        });
    })()
  };

  for (let prefix = 65; prefix <= 65; prefix++) {
    (function() {
        it(`has a prefix of ${prefix} and a length of 16`, function() {
          expect(detectNetwork(`${prefix}11111111111111`)).to.equal('Discover');
        });
    })()
  };

  for (let prefix = 65; prefix <= 65; prefix++) {
    (function() {
        it(`has a prefix of ${prefix} and a length of 19`, function() {
          expect(detectNetwork(`${prefix}11111111111111111`)).to.equal('Discover');
        });
    })()
  };

});

describe('Maestro', function() {

  const expect = chai.expect;

  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
    for (let prefix = 5018; prefix <= 5020; prefix += 2) {
      let numStr;
      for(let length = 12; length <= 19; length++){
      (function() {
        let numStr;
        for(let i = 0; i < length.length; i++){
          numStr += '1';
        }
        it(`has a prefix of ${prefix} and a length of ${length}`, function() {
          expect(detectNetwork(`${prefix}${numStr}`)).to.equal('Maestro');
        });
      })()
    };
  }

  for (let prefix = 5038; prefix <= 5038; prefix++) {
    let numStr;
    for(let length = 12; length <= 19; length++){
    (function() {
      let numStr;
      for(let i = 0; i < length.length; i++){
        numStr += '1';
      }
      it(`has a prefix of ${prefix} and a length of ${length}`, function() {
        expect(detectNetwork(`${prefix}${numStr}`)).to.equal('Maestro');
      });
    })()
  };
}

for (let prefix = 6304; prefix <= 6304; prefix++) {
  let numStr;
  for(let length = 12; length <= 19; length++){
    (function() {
      let numStr;
      for(let i = 0; i < length.length; i++){
        numStr += '1';
      }
      it(`has a prefix of ${prefix} and a length of ${length}`, function() {
        expect(detectNetwork(`${prefix}${numStr}`)).to.equal('Maestro');
      });
    })()
    };
  }

});

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
describe('China UnionPay', function(){
  var expect = chai.expect;

  function addNum(length, prefix){
    let counter = '';
    var strPrefix = String(prefix);
    length = length - strPrefix.length;
    while(length > 0){
      counter += '5';
      length--;
    }
    return counter;
  }

  for (var length = 16; length <= 19; length++) {
    for(var prefix = 622126; prefix <= 622925; prefix++){

    (function(length, prefix) {
    it('has a prefix of ' + prefix + ' and a length of ' + length,
      function(){
      expect(detectNetwork(prefix + addNum(length, prefix))).to.equal('China UnionPay');
      });
    })(length, prefix);

  }}

  for (var length = 16; length <= 19; length++) {
    for(var prefix = 624; prefix <= 626; prefix++){

    (function(length, prefix) {
    it('has a prefix of ' + prefix + ' and a length of ' + length,
      function(){
      expect(detectNetwork(prefix + addNum(length, prefix))).to.equal('China UnionPay');
      });
    })(length, prefix);

  }}

  for (var length = 16; length <= 19; length++) {
    for(var prefix = 6282; prefix <= 6288; prefix++){

    (function(length, prefix) {
    it('has a prefix of ' + prefix + ' and a length of ' + length,
      function(){
      expect(detectNetwork(prefix + addNum(length, prefix))).to.equal('China UnionPay');
      });
    })(length, prefix);

  }}
});

// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

describe('Switch', function(){
  var expect = chai.expect;

  function addNum(length, prefix){
    let counter = '';
    length = length - (prefix.length);
    while(length > 0){
      counter += '5';
      length--;
    }
    return counter;
  }

  for (var length = 16; length <= 19; length++) {
    if(length !== 17){

      (function(length) {
        var prefix = '4903';
      it('has a prefix of ' + prefix + ' and a length of ' + length,
        function(){
        expect(detectNetwork(prefix + addNum(length, prefix))).to.equal('Switch');
        });
      })(length);
    }
  }

  for (var length = 16; length <= 19; length++) {
    if(length !== 17){

      (function(length) {
        var prefix = '4905';
      it('has a prefix of ' + prefix + ' and a length of ' + length,
        function(){
        expect(detectNetwork(prefix + addNum(length, prefix))).to.equal('Switch');
        });
      })(length);
    }
  }

  for (var length = 16; length <= 19; length++) {
    if(length !== 17){

      (function(length) {
        var prefix = '4911';
      it('has a prefix of ' + prefix + ' and a length of ' + length,
        function(){
        expect(detectNetwork(prefix + addNum(length, prefix))).to.equal('Switch');
        });
      })(length);
    }
  }

  for (var length = 16; length <= 19; length++) {
    if(length !== 17){

      (function(length) {
        var prefix = '4936';
      it('has a prefix of ' + prefix + ' and a length of ' + length,
        function(){
        expect(detectNetwork(prefix + addNum(length, prefix))).to.equal('Switch');
        });
      })(length);
    }
  }

  for (var length = 16; length <= 19; length++) {
    if(length !== 17){

      (function(length) {
        var prefix = '564182';
      it('has a prefix of ' + prefix + ' and a length of ' + length,
        function(){
        expect(detectNetwork(prefix + addNum(length, prefix))).to.equal('Switch');
        });
      })(length);
    }
  }

  for (var length = 16; length <= 19; length++) {
    if(length !== 17){

      (function(length) {
        var prefix = '633110';
      it('has a prefix of ' + prefix + ' and a length of ' + length,
        function(){
        expect(detectNetwork(prefix + addNum(length, prefix))).to.equal('Switch');
        });
      })(length);
    }
  }

  for (var length = 16; length <= 19; length++) {
    if(length !== 17){

      (function(length) {
        var prefix = '6333';
      it('has a prefix of ' + prefix + ' and a length of ' + length,
        function(){
        expect(detectNetwork(prefix + addNum(length, prefix))).to.equal('Switch');
        });
      })(length);
    }
  }

  for (var length = 16; length <= 19; length++) {
    if(length !== 17){

      (function(length) {
        var prefix = '6759';
      it('has a prefix of ' + prefix + ' and a length of ' + length,
        function(){
        expect(detectNetwork(prefix + addNum(length, prefix))).to.equal('Switch');
        });
      })(length);
    }
  }
});
