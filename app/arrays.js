if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for (var i=0; i<arr.length; i++) {
        if (arr[i] === item) {
          return i;
        }
      }
      return -1;
    },

    sum : function(arr) {
      return arr.reduce(function(total, current) {return total+current;}, 0);
    },

    remove : function(arr, item) {
      var index = arr.indexOf(item);
      while (index>=0) {
        arr.splice(index, 1);
        index = arr.indexOf(item);
      }
      return arr;
    },

    removeWithoutCopy : function(arr, item) {
      return this.remove(arr, item);
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, [item]);
      return arr;
    },

    count : function(arr, item) {
      return arr.reduce(function(total, current) {return total + (item === current);}, 0);
    },

    duplicates : function(arr) {
      var storage = {};
      for (var i=0; i<arr.length; i++) {
        storage[arr[i]] = (storage[arr[i]] || 0) + 1;
      }
      var results = [];
      for (var key in storage) {
        if (storage[key] > 1) {
          results.push(key);
        }
      }
      return results;
    },

    square : function(arr) {
      return arr.map(function(val) {return val*val;});
    },

    findAllOccurrences : function(arr, target) {
      return arr.reduce(function(memo, current, index) {
        if (current === target) {
          memo.push(index);
        }
        return memo;
      }, []);
    }
  };
});
