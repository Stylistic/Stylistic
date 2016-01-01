"use strict";

let Static = require( 'node-static' ),
    port = 8080,
    http = require( 'http' );

// config
let file = new Static.Server( './dist', {
    cache: 3600,
    gzip: true
} );

http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve( request, response );
    } ).resume();
} ).listen( port );
