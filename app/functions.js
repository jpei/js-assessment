if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function(newStr) {
        return str + ', ' + newStr;
      };
    },

    makeClosures : function(arr, fn) {
      return arr.map(function(val) {
        return function() {
          return val*val;
        };
      });
    },

    partial : function(fn, str1, str2) {
      return fn.bind(null, str1, str2);
    },

    useArguments : function() {
      return Array.prototype.reduce.call(arguments, function(total, current) {
        return total + current;
      });
    },

    callIt : function(fn) {
      return fn.apply(null, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      args.unshift(null);
      return fn.bind.apply(fn, args);
    },

    curryIt : function(fn) {
      var curryOnce = function(func, numArgs, oneArg) {
        if (numArgs === 1) {
          return func.call(null, oneArg);
        }
        return curryOnce.bind(null, func.bind(null, oneArg), numArgs-1);
      };
      return curryOnce.bind(null, fn, 3);
    }
  };
});
