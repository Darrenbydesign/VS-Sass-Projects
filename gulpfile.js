/// <vs SolutionOpened='default' />
//Requirements for the project gulp tasks to work
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
//var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');


//Variables 
var input = 'sass/**/*.scss'; //This finds the scss files in the sass folder for compilation

var output = './css'; //This outputs the compiled css files into the CSS folder

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
}; // Options that are passed to the compilation 

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'FIrefox ESR']
}; // autoprefixer options variable when using the autoprefixer option in the css files

var sassdocOptions = {
    dest: './sassdoc'
};

// Gulp Task to compile sass files using gulp-sass provides extra options and logs errors when compile fails
gulp.task('sass', function () {
    return gulp
        .src(input)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        //.pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(output));
});


// Seperate task to create sassdoc  documentation
gulp.task('sassdoc', function () {
    return gulp
        .src(input)
        .pipe(sassdoc(sassdocOptions))
        .resume();
});


// Gulp Task that watches the Sass files and compiles CSS after a file is saved
gulp.task('watch', function () {
    return gulp
    // Step 1. Watch Folder
    // Step 2. Run 'sass' task whenver a change happens
    .watch(input, ['sass'])
    //Step 3. Log a message in the console when a change is made
    .on('change', function (event) {
        console.log('File' + event.path + 'was' + event.type + ', running tasks...');
    });
});

// Build settings for production
gulp.task('prod', ['sassdoc'], function () {
    return gulp
       .src(input)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest(output));
});

// Default task that runs watch on sass files
gulp.task('default', ['sass', 'watch']);
