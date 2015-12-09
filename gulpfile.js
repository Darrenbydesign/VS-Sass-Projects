/// <vs SolutionOpened='default' />
//Requirements for the project gulp tasks to work
var gulp = require('gulp');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sassdoc = require('sassdoc');

var ts = require('gulp-typescript');

gulp.task('scripts', function () {
    return gulp
    .src(tsInput)
    .pipe(ts(typescriptOptions))
    .pipe(gulp.dest('built/local'));
});



//Variables 
var sassInput = 'sass/**/*.scss'; //This finds the scss files in the sass folder for compilation

var sassOutput = './styles'; //This outputs the compiled css files into the CSS folder

var tsInput = 'typescript/**/*.ts'; //This finds the typescript files in the typescript folder for compilation

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

}; // adds values to the sassdoc to set the path for the documentation

// JSON options for compiling Typescript files
var typescriptOptions = {
    noImplicityAny: true,
    out: 'output.js'
};

// Seperate task to create sassdoc  documentation
gulp.task('sassdoc', function () {
    return gulp
        .src(sassInput)
        .pipe(sassdoc(sassdocOptions))
        .resume();
});

// Gulp Task that watches the Sass files and compiles CSS after a file is saved
gulp.task('sass-watch', function () {
    return gulp
        // Step 1. Watch Folder
        // Step 2. Run 'sass' task whenver a change happens
        // Step 3. Log a message in the console when a change is made
        .watch(sassInput, ['sass'])
        //.watch(jadeInput, ['jade'])
        .on('change', function (event) {
            console.log('File' + event.path + 'was' + event.type + ', running tasks...');
        });
});

// Gulp Task to compile sass files using gulp-sass provides extra options and logs errors when compile fails
gulp.task('sass', function () {
    return gulp
        .src(sassInput)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions)
        .on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(sassOutput));
});

// Build settings for compiling new Sass Documentation in production
gulp.task('prod', ['sassdoc'], function () {
    return gulp
        .src(sassInput)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest(sassOutput));
});


// Default task that runs watch files that can be compiled
// more watch tasks can be added to this default task ... e.g a 'jade' watch can added to utilize that function
gulp.task('default', ['prod', 'sass-watch']);
