if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var deferred = $.Deferred();
      setTimeout(function() {
        deferred.resolve(value);
      }, 0);
      return deferred;
    },

    manipulateRemoteData : function(url) {
      return $.ajax(url)
        .then(function(result) {
          return result.people.map(function(person) {
            return person.name;
          }).sort();
        });
    }
  };
});
