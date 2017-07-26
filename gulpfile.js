//Importar los modulos y plugins que se usaran. Cada uno se importa con require('modulo')
//https://www.npmjs.com/package/gulp-sass/
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create(); //BROWSERSYNC - https://browsersync.io/docs/gulp
const autoprefixer = require('gulp-autoprefixer'); //gulp-autoprefixer - https://www.npmjs.com/package/gulp-autoprefixer
//Crear tarea
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')  //En que carpeta buscara los archivos
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ 
            browsers: ['last 2 versions'],
            cascade: true
        }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());

});


// Static Server + watching scss/html files
gulp.task('default', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload); // ./ significa el mismo directorio
    gulp.watch("./js/*.js").on('change', browserSync.reload); 
});


