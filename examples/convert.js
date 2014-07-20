/**
 * Example for using LWIP to rotate an image.
 */

var path = require('path'),
    lwip = require('../');

lwip.open('lena.png', function(err, image) {
    if (err) return console.log(err);
    image.writeFile('lena_from_png.jpg', function(err) {
        if (err) return console.log(err);
        console.log('done')
    });
});
