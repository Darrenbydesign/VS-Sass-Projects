//Requirements for the project gulp tasks to work
var gulp = require('gulp');
var sass = require('gulp-sass');

//This finds the scss files in the sass folder for compilation
var input = './sass/**/*.scss';

//This outputs the compiled css files into the CSS folder
var output = './css';

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

// Gulp Task to compile sass files using gulp-sass
gulp.task('sass', function () {
    return gulp
    // Find all '.scss files from the declared folder
    .src(input)

    //run sass on the files selected in the declared folder 
    .pipe(sass())

    // write the css in the decalred output. (CSS folder by default)
    .pipe(gulp.dest(output));
});

// Gulp task to show errors when sass compile fails 
gulp.task('sass', function () {
    return gulp
        .src(input)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest(output));
}
);