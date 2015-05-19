if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return !!str.match(/\d/);
    },

    containsRepeatingLetter : function(str) {
      return !!str.match(/([a-z])\1/i);
    },

    endsWithVowel : function(str) {
      return !!str.match(/[a,e,i,o,u]$/i);
    },

    captureThreeNumbers : function(str) {
      var matches = str.match(/\d{3}/);
      return matches ? matches[0] : false;
    },

    matchesPattern : function(str) {
      return !!str.match(/^\d{3}-\d{3}-\d{4}$/);
    },

    isUSD : function(str) {
      return !!str.match(/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/);
    }
  };
});
