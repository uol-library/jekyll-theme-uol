/**
 * Minifies javascript using UglifyJS and minifies features JSON
 */
const fs = require('fs');
const path = require('path');
const UglifyJS = require("uglify-js");
const sass = require('sass');

var result = sass.compile( path.resolve( __dirname, '../_sass/style.scss' ), {style: "compressed"} );
fs.writeFileSync( path.resolve( __dirname, '../assets/theme/style.min.css' ), result.css );

const jsdir = '../_includes/javascript/';
fs.writeFileSync( path.resolve( __dirname, '../assets/theme/script.min.js' ), UglifyJS.minify({
     "utilities.js": fs.readFileSync( path.resolve( __dirname, jsdir, 'utilities.js' ), "utf8" ),
     "search.js": fs.readFileSync( path.resolve( __dirname, jsdir, 'search.js' ), "utf8" )
}, { toplevel: true } ).code, "utf8" );

