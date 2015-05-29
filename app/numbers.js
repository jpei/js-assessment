if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return num >> bit-1 & 1;
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      var bitString = num.toString(2);
      while (bitString.length < 8) {
        bitString = '0'+bitString;
      }
      return bitString;
    },

    multiply: function(a, b) {
      var divisor = 1;
      while (a%1) {
        a *= 10;
        divisor *= 10;
      }
      while (a%10===0) {
        a /= 10;
        divisor /= 10;
      }
      while (b%1) {
        b *= 10;
        divisor *= 10;
      }
      while (b%10===0) {
        b /= 10;
        divisor /= 10;
      }
      return a*b/divisor;
    }
  };
});

