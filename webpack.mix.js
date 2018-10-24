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
    
    'resources/plantillas/css/boostrap.css',
    'resources/plantillas/css/font-awesome.css',
    'resources/plantillas/css/ionicosns.css',
    'resources/plantillas/css/jquery-ui.css',
    'resources/plantillas/css/style.css',
    
    'public/Asset/css/plantilla.css'


   .sass('resources/sass/app.scss', 'public/css');
   
   'resources/plantillas/Asset/css/jquery-ui.css',
   'resources/plantillas/Asset/css/jquery-ui.css',
   'resources/plantillas/Asset/css/jquery-ui.css',
   'public/js/plantillas.js'
   