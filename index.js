
(function(){

  'use strict';

  var ConsoleMessage = function(){
    var self = this;
    var contents = [];

    return {

      flush: function() {
        contents = [];
      },

      line: function( msg, paddingFront ) {
        var message = '';
        if ( paddingFront ) {
          for ( var i = 1; i <= paddingFront; i++ ) {
            message += ' ';
          }
        }

        message += msg + '\n';
        contents.push( message );
        return this;
      },

      charSeq: function( specialChar, length, newLine  ) {
        var message = '';
        for ( var i = 1; i <= length; i++ ) {
          message += specialChar;
        }
        contents.push( message );
        return this;
      },

      append: function( msg ) {

        var lastIndex = contents.length - 1;
        if ( lastIndex < 0 ) {
          lastIndex = 0;
        }
        contents[ lastIndex ] += msg;
        return this;
      },

      break: function() {
        contents.push( '\n' );
        return this;
      },

      display: function() {
        for ( var i = 0; i < contents.length; i++ ) {
          console.log( contents[ i ] );
        }
        this.flush();
        return this;
      }
    };
  };

  if ( typeof module !== 'undefined' && module.exports ) {
    module.exports = ConsoleMessage;
  } else if ( typeof define !== 'undefined' && define.amd ) {
    define([], function () {
      return ConsoleMessage;
    });
  } else {
    window.ConsoleMessage = ConsoleMessage;
  }

}());


