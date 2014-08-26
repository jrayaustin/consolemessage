```javascript
  new ConsoleMessage()

    .line( 'waddup', 10 )

    .charSeq( '*', 30 )

    .line( 'yea' )

    .charSeq( '=', 10, true )

    .append( 'blah' )

    .break()

    .line( 'sweet' )

    .display()

    .flush();
```

Yields
```
          waddup
******************************
yea==========blah


sweet
```