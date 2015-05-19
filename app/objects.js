if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      return Object.keys(obj)
        .filter(function(key) { return obj.hasOwnProperty(key); })
        .map(function(key) { return key + ': ' + obj[key]; });
    }
  };
});
