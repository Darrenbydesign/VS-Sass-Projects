/// <vs SolutionOpened='default' />
//Requirements for the project gulp tasks to work
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
//var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
//var jade = require('gulp-jade');



//Variables 
var sassInput = 'sass/**/*.scss'; //This finds the scss files in the sass folder for compilation

var sassOutput = './css'; //This outputs the compiled css files into the CSS folder

//var jadeInput = './jade/**/*.jade';
//var jadeOutput = './Views/Static';
//var jadeOptions = {
//   jade: jade,
//    pretty: true
//}
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
}; // Options that are passed to the compilation 

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'FIrefox ESR']
}; // autoprefixer options variable when using the autoprefixer option in the css files

var sassdocOptions = {
    dest: './sassdoc'
}; // adds values to the sassdoc to set the path for the documentation


// Gulp Task to compile sass files using gulp-sass provides extra options and logs errors when compile fails
gulp.task('sass', function () {
    return gulp
        .src(sassInput)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions)
        .on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        //.pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(sassOutput));
});


// Seperate task to create sassdoc  documentation
gulp.task('sassdoc', function () {
    return gulp
        .src(sassInput)
        .pipe(sassdoc(sassdocOptions))
        .resume();
});


// Gulp Task that watches the Sass files and compiles CSS after a file is saved
gulp.task('watch', function () {
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

// Build settings for production
gulp.task('prod', ['sassdoc'], function () {
    return gulp
       .src(sassInput)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest(sassOutput));
});


// Gulp task that runs gulp jade in the CLI
//gulp.task('jade', function () {
//    return gulp
//        .src(jadeInput)
//        .pipe(jade(jadeOptions))
//        .pipe(gulp.dest(jadeOutput))
//        .on('error', gutil.log);
//});

// Default task that runs watch files that can be compiled
// more watch tasks can be added to this default task ... e.g a 'jade' watch can added to utilize that function
gulp.task('default', ['sass', 'watch']);
