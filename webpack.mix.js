const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
/*'resources/js/plugin/imagesloaded.pkgd.min.js',
'resources/js/plugin/isotope.pkgd.min.js',
'resources/js/plugin/jquery.colorbox-minjs',
'resources/js/plugin/jquery.easing.js',
'resources/js/plugin/jquery.fitvids.js',
'resources/js/plugin/jquery.flexslider.js',
'resources/js/plugin/jquery.fs.tipper.min.js',
'resources/js/plugin/jquery.stellar.min.js',
'resources/js/plugin/jquery.viewportchecker.js',
'resources/js/plugin/masonry.pkgd.min.js',
'resources/js/plugin/mediaelement-and-player.min.js',
'resources/js/plugin/owl.carousel.min.js',
'resources/js/plugin/wow.min.js',

'resources/js/app.js',
'resources/js/bootstrap.js',
'resources/js/bootstrap.min.js',
'resources/js/jquery-1.11.2.min.js',
'resources/js/jquery-ui.min.js',
'resources/js/theme.js',*/


   .sass('resources/sass/app.scss', 'public/css');

/*'resources/sass/plugin/animate.css',
'resources/sass/plugin/colorbox.css',
'resources/sass/plugin/flexslider.css',
'resources/sass/plugin/jquery.fs.tipper.css',
'resources/sass/plugin/mediaelementplayer.css',
'resources/sass/plugin/owl.carousel.css';

'resources/sass/bootstrap.css',
'resources/sass/font-awesome.css',
'resources/sass/ionicons.css',
'resources/sass/jquery-ui.css',
'resources/sass/style.css';*/
