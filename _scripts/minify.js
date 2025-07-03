/**
 * Minifies javascript using UglifyJS and minifies features JSON
 */
const fs = require('fs');
const path = require('path');
const UglifyJS = require("uglify-js");
const sass = require('sass');
const { exec } = require('child_process');

const compiled_js = path.resolve( __dirname, '../assets/theme/script.min.js' );
const compiled_css = path.resolve( __dirname, '../assets/theme/style.min.css' );
const jsdir = '../_includes/javascript/';
const foot_tpl = path.resolve( __dirname, '../_includes/foot.html' );
const head_tpl = path.resolve( __dirname, '../_includes/head.html' );

var result = sass.compile( path.resolve( __dirname, '../_sass/style.scss' ), {style: "compressed"} );
fs.writeFileSync( compiled_css, result.css );

fs.writeFileSync( compiled_js, UglifyJS.minify({
    "utilities.js": fs.readFileSync( path.resolve( __dirname, jsdir, 'utilities.js' ), "utf8" ),
    "search.js": fs.readFileSync( path.resolve( __dirname, jsdir, 'search.js' ), "utf8" )
}, { toplevel: true } ).code, "utf8" );

exec('openssl dgst -sha384 -binary ' + compiled_js + ' | openssl base64 -A', (err, stdout, stderr) => {
    if (err) {
        console.log( "Couldn't execute the command: " + stderr );
        return;
    }
    console.log( "Updating hash in foot template to: " + stdout );
    let foot = fs.readFileSync( foot_tpl, 'utf8' );
    const updatedFoot = foot.replace(/script\.min\.js" \| absolute_url }}" integrity="[^"]*/, `script.min.js" | absolute_url }}" integrity="sha384-${stdout}`);
    fs.writeFileSync( foot_tpl, updatedFoot, 'utf8' );
});

exec('openssl dgst -sha384 -binary ' + compiled_css + ' | openssl base64 -A', (err, stdout, stderr) => {
    if (err) {
        console.log( "Couldn't execute the command: " + stderr );
        return;
    }
    console.log( "Updating hash in head template to: " + stdout );
    // Update the head template with the new integrity hash for the CSS file
    // Read the head template file
    let head = fs.readFileSync( head_tpl, 'utf8' );
    const updatedHead = head.replace(/style\.min\.css" \| absolute_url }}" integrity="[^"]*/, `style.min.css" | absolute_url }}" integrity="sha384-${stdout}`);
    fs.writeFileSync( head_tpl, updatedHead, 'utf8' );
});
