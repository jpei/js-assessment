/*jshint loopfunc: true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName, addMe) {
      var results = [];
      // addMe can be inherited, no directory specified, or directory matched
      addMe = addMe || !dirName || data.dir === dirName;
      for (var i=0; i<data.files.length; i++) {
        if (typeof data.files[i] === 'string') {
          if (addMe) {
            results.push(data.files[i]);
          }
        } else if(typeof data.files[i] === 'object') {
          results = results.concat(this.listFiles(data.files[i], dirName, addMe));
        }
      }
      return results;
    },

    permute: function(arr) {
      if (!arr.length) {
        return [[]];
      }
      return arr.map(function(val, index) {
        var newArray = arr.slice();
        newArray.splice(index, 1);
        return this.permute(newArray).map(function(subPermutation) {
          subPermutation.unshift(val);
          return subPermutation;
        });
      }, this).reduce(function(total, current) {
        return total.concat(current);
      }, []);
    },

    fibonacci: function(n) {
        if (n<=2) {
          return 1;
        }
        return this.fibonacci(n-1) + this.fibonacci(n-2);
    },

    validParentheses: function(n) {
      var results = {};
      if (!n) {
        return [''];
      }
      for (var i=n; i>0; i--) {
        if (i === n) {
          this.validParentheses(n-1).forEach(function(inner) {
            results['('+inner+')'] = true;
          });
        } else {
          var firstCombs = this.validParentheses(i);
          var secondCombs = this.validParentheses(n-i);
          firstCombs.forEach(function(first) {
            secondCombs.forEach(function(second) {
              results[first+second] = true;
            });
          });
        }
      }
      return Object.keys(results);
    }
  };
});
