
(function(){

  'use strict';

  var ConsoleMessage = function(){
    var self = this;
    var contents = [];

    var flush = function() {
      contents = [];
    };

    return {

      // display a line of text. optionally, you can specifiy the amount
      // of padding (spaces) to precede the message
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

      // displays a character sequence a specified number of times
      charSeq: function( specialChar, length, newLine  ) {
        var message = '';

        for ( var i = 1; i <= length; i++ ) {
          message += specialChar;
        }
        contents.push( message );
        return this;
      },

      // append an arbitrary string to the current message content
      append: function( msg ) {
        var lastIndex = contents.length - 1;

        if ( lastIndex < 0 ) {
          lastIndex = 0;
        }
        contents[ lastIndex ] += msg;
        return this;
      },

      // display a line break
      break: function() {
        contents.push( '\n' );
        return this;
      },

      // display the currently constructed message if the flush flag
      // is set to true, then the message will be emptied after it is displayed
      display: function( opts, flush ) {
        opts = opts || {};
        var paddingTop = opts.paddingTop || 0;
        var paddingBottom = opts.paddingBottom || 0;

        for ( var k = 0; k <= paddingTop; k++ ) {
          console.log( '\n' );
        }

        for ( var i = 0; i < contents.length; i++ ) {
          console.log( contents[ i ] );
        }

        for ( var j = 0; j <= paddingBottom; j++ ) {
          console.log( '\n' );
        }


        if ( flush ) {
          flush();
        }

        return this;
      }
    };
  };

  if ( typeof module !== 'undefined' && module.exports ) {
    module.exports = ConsoleMessage;
  } else if ( typeof define !== 'undefined' && define.amd ) {
    // AMD compatibility
    define([], function () {
      return ConsoleMessage;
    });
  } else {
    window.ConsoleMessage = ConsoleMessage;
  }

}());


