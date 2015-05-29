if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var cancelled = false;
      var count = start;
      var increment = function() {
        console.log(count++);
        if (count > end) {
          clearInterval(interval);
          cancelled = true;
        }
      };
      var interval = setInterval(increment, 100);
      increment();
      return { cancel: function() { clearInterval(interval); } };
    }
  };
});
