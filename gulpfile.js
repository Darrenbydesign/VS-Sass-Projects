/// <vs SolutionOpened='default' />
//Requirements for the project gulp tasks to work
var gulp            = require('gulp'),
    // non grouped plugins
     del            = require('del'),
     cache          = require('gulp-cache'),
     sourcemaps     = require('gulp-sourcemaps'),
     runSequence    = require('run-sequence'),
     //browserSync    = require('browser-sync'),

     // grouped plugins
     sass           = require('gulp-sass'),
     sassdoc        = require('sassdoc'),
     ts             = require('gulp-typescript'),
     tsProject      = ts.createProject('tsconfig.json');

//Path Variables for various actions on folders and files 
var paths = {
    // sass paths
    sassInput       : 'app/sass/**/*.scss',          // finds the scss files in the sass folder for compilation
    sassOutput      : 'app/styles',                  // outputs the compiled css files into the CSS folder

    // typescript paths
    tsInput         : 'app/typescript/**/*.ts',     // finds the typescript files in the typescript folder for compilation
    tsOutput        : 'app/Scripts',                    // outputs to compiled js files to the Scripts folder

    // production paths
    production      : 'production',
    prodFonts       : 'production/fonts',
    prodStyles      : 'production/styles',
    prodImages      : 'production/images',
    prodScripts     : 'production/Scripts',
    prodViews       : 'production/Views',

    // dev paths
    fonts           : 'app/fonts/**/*',
    scripts         : 'app/Scripts/**/*.js',
    images          : 'app/images/**/*.+(png|jpg|gif|svg)',
    html            : 'app/Views/**/*.html',
    mapPath         : './maps',
};

// JSON options for compiling Sass files
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
}; // Options that are passed to the compilation 

// JSON options for compiling Sassdoc files
var sassdocOptions = {
    dest: './sassdoc',
    verbose: true,
    theme: 'flippant', // This uses a theme aside from the default theme to find out about creating custom themes visit: http://http://sassdoc.com/using-your-own-theme/

}; // adds values to sassdoc compilers to set the path,error logging, and theme file for the documentation

// Gulp task to send fonts to production folder
gulp.task('fonts', function () {
    console.log('Compliling Fonts');
    return gulp
        .src(paths.fonts)
        .pipe(gulp.dest(paths.prodFonts));
});

// Gulp task to send html to production folder
gulp.task('html', function () {
    console.log('Compliling HTML');
    return gulp
        .src(paths.html)
        .pipe(gulp.dest(paths.prodViews));
});

// Gulp task to send images to production folder
gulp.task('images', function () {
    console.log('Compliling images');
    return gulp
        .src(paths.images)
        .pipe(gulp.dest(paths.prodImages));
});

gulp.task('scripts', function () {
    console.log('transferring scripts');
    return gulp
        .src(paths.scripts)
        .pipe(gulp.dest(paths.prodScripts));
});

// Gulp task to clean up the production folder 
gulp.task('clean', function (callback) {
    console.log('Cleaning production folder');
    del(paths.production);
    return cache.clearAll(callback);
});

// Gulp task to clean up specific folders in production
gulp.task('clean:production', function (callback) {
    del(['production/**/*', '!production/images', '!production/images/**/*', callback]);
});

// Gulp task to compile and transform Typescript files into regular Javascript
gulp.task('typescript', function () {
    var tsResult = gulp
        .src(paths.tsInput)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write(paths.mapPath))
        .pipe(gulp.dest(paths.tsOutput));
    console.log('Compiling typescript');
    return tsResult.js;
});

// Seperate task to create sassdoc  documentation
gulp.task('sassdoc', function () {
    var sassdocResult = gulp
        .src(paths.sassInput)
        .pipe(sassdoc(sassdocOptions))
        .resume();
    return sassdocResult;
});

// Gulp Task to compile sass files using gulp-sass provides extra options and logs errors when compile fails
gulp.task('sass', function () {
    var sassResult = gulp
        .src(paths.sassInput)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions)
        .on('error', sass.logError))
        .pipe(sourcemaps.write(paths.mapPath))
        .pipe(gulp.dest(paths.sassOutput));

    return sassResult;
});

// Gulp Task that watches the Sass files and compiles CSS after a file is saved
gulp.task('watch', function () {
    gulp.watch(paths.sassInput, ['sass'])
        .on('change', function (event) {
            console.log('File' + event.path + ' was ' + event.type + ', running tasks...');
        });
    gulp.watch(paths.tsInput, ['typescript']);
});


// Build settings for compiling sass, sassdoc, and typescript differently in production
gulp.task('prod', function (callback) {
    var prodResult = gulp
        .src(paths.sassInput)
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest(paths.prodStyles));

    runSequence(['sassdoc','clean:production', 'fonts','scripts', 'images', 'html'], callback);
    return prodResult;
});
// Deploy task that moves files to production folder
gulp.task('deploy', ['prod'], function () {
    console.log('Deploying to Production Folder.');
});
// Default task that runs watch files that can be compiled
// more watch tasks can be added to this default task
gulp.task('default', ['watch'], function () {
    console.log('Running default tasks for you');
});