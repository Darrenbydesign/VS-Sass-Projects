/// <vs BeforeBuild='prod' AfterBuild='prod' SolutionOpened='default' />
//Requirements for the project gulp tasks to work
var  gulp           = require('gulp'),
     sass           = require('gulp-sass'),
     sourcemaps     = require('gulp-sourcemaps'),
     sassdoc        = require('sassdoc'),
     ts             = require('gulp-typescript'),
     tsProject      = ts.createProject('tsconfig.json');

//Path Variables for various actions on folders and files 
var paths = {
    sassInput   : 'app/sass/**/*.scss',          // finds the scss files in the sass folder for compilation
    sassOutput  : 'app/styles',                  // outputs the compiled css files into the CSS folder
    tsInput     : 'app/typescripts/**/*.ts',     // finds the typescript files in the typescript folder for compilation
    tsoutput    : 'app/Scripts',                 // outputs to compiled js files to the Scripts folder
    mapPath: './maps',
    production: 'production',
};


// Gulp task to compile and transform Typescript files into regular Javascript
gulp.task('ts-scripts', function () {
    var tsResult = gulp
        .src(paths.tsInput)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write(paths.mapPath))
        .pipe(gulp.dest(paths.tsoutput));

    return tsResult.js;
});


// JSON options for compiling Sassdoc files
var sassdocOptions = {
    dest: './sassdoc',
    verbose: true,
    theme: 'flippant', // This uses a theme aside from the default theme to find out about creating custom themes visit: http://http://sassdoc.com/using-your-own-theme/

}; // adds values to sassdoc compilers to set the path,error logging, and theme file for the documentation


// Seperate task to create sassdoc  documentation
gulp.task('sassdoc', function () {
    return gulp
        .src(paths.sassInput)
        .pipe(sassdoc(sassdocOptions))
        .resume();
});


// JSON options for compiling Sass files
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
}; // Options that are passed to the compilation 


// Gulp Task to compile sass files using gulp-sass provides extra options and logs errors when compile fails
gulp.task('sass', function () {
    return gulp
        .src(paths.sassInput)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions)
        .on('error', sass.logError))
        .pipe(sourcemaps.write(paths.mapPath))
        .pipe(gulp.dest(paths.sassOutput));
});

// Gulp Task that watches the Sass files and compiles CSS after a file is saved
gulp.task('sass-watch', function () {
    return gulp
        // Step 1. Watch Folder
        // Step 2. Run 'sass' task whenver a change happens
        // Step 3. Log a message in the console when a change is made
        .watch(paths.sassInput, ['sass'])
        .on('change', function (event) {
            console.log('File' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

// Gulp watch task that watches for changes to Typescript files and chages them Javascript
gulp.task('ts-watch', function () {
    return gulp
    .watch(paths.tsInput, ['ts-scripts']);
});


// Build settings for compiling sass, sassdoc, and typescript differently in production
gulp.task('prod', ['sassdoc', 'ts-scripts'], function () {
    return gulp
        .src(paths.sassInput)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest(paths.production));
});

// Default task that runs watch files that can be compiled
// more watch tasks can be added to this default task ... e.g a 'jade' watch can added to utilize that function
gulp.task('default', ['ts-watch', 'sass-watch']);
