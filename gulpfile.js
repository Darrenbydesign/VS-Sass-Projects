/// <vs SolutionOpened='default' />
//Requirements for the project gulp tasks to work
//=====================================================================
var gulp                = require('gulp'),
    // non grouped plugins
     del                = require('del'),
     cache              = require('gulp-cache'),
     imagemin           = require('gulp-imagemin'),
     sourcemaps         = require('gulp-sourcemaps'),
     runSequence        = require('run-sequence'),
     browserSync        = require('browser-sync'),
     styleguide         = require('sc5-styleguide'),

     // grouped plugins
     sass               = require('gulp-sass'),
     sassdoc            = require('sassdoc'),
     ts                 = require('gulp-typescript'),
     tsProject          = ts.createProject('tsconfig.json');

//Path Variables for various actions on folders and files 
//=====================================================================
var paths = {
    // sass paths
    sassInput                        : 'app/sass/**/*.scss',                // finds the scss files in the sass folder for compilation
    sassOutput                       : 'app/styles',                        // outputs the compiled css files into the CSS folder
    // typescript paths
    tsInput                          : 'app/typescript/**/*.ts',            // finds the typescript files in the typescript folder for compilation
    tsOutput                         : 'app/Scripts',                       // outputs to compiled js files to the Scripts folder
    // styleguide paths
    sc5Output                        : 'styleguide',
    styleguide_htmlOutput            : 'styleguide',

    // production paths
    production                       : 'production',
    prodFonts                        : 'production/fonts',
    prodStyles                       : 'production/styles',
    prodImages                       : 'production/images',
    prodScripts                      : 'production/Scripts',
    prodViews                        : 'production/',

    // dev paths
    fonts                            : 'app/fonts/**/*',
    scripts                          : 'app/Scripts/**/*.js',
    images                           : 'app/images/**/*.+(png|jpg|gif|svg)',
    videos                           : 'app/images/**/*.+(mp4|webm|ogg|theora|mov)',
    html                             : 'app/**/*.html',
    mapPath                          : './maps',
},

// JSON options for compiling Sass files
//=====================================================================
    sassOptions = {
        errLogToConsole              : true,
        outputStyle                  : 'expanded'
    },

// JSON options for compiling Sassdoc files
//=====================================================================
    sassdocOptions = {
        dest                         : './sassdoc',
        verbose                      : true,
        theme                        : 'flippant',                        // This uses a theme aside from the default theme to find out about creating custom themes visit http://http://sassdoc.com/using-your-own-theme/
    },

// JSON options for BrowswerSync Server
//=====================================================================
    browserSyncOptions = {
        server                       : {
            baseDir                  : 'app/',
        },
        //files                      : [paths.html, paths.sassInput, paths.tsInput]
    },

// JSON options for SC5 Styleguide generator
//=====================================================================
    sc5Options = {
        title                        : 'VS Project Style Guide',
        appRoot                      : 'styleguide',
        rootPath                     : 'styleguide',
        disableHtml5Mode             : true,
        port                         : '9000',
        overviewPath                 : 'README.md'
    },
// JSON options for imagemin plug-in
    imageminOptions = {
        progressive                  : true,
        svgoPlugins                  : [{ removeViewBox: false }, { removeEmptyAttrs: true }],
        interlaced                   : true
    };

// COMPILE TASK TO CREATE CSS JS and DOCUMENTATION FILES
//===================================================================

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
    console.log('\nCreating sass documentation\n\n');
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
        .pipe(browserSync.reload({stream: true}))
        .pipe(gulp.dest(paths.sassOutput));
    console.log('\nCompiling sass\n\n');
    return sassResult;
});

// IMPORT TASKS FOR GULP TO ADD THINGS ASSETS TO PRODUCTION FOLDER
//===================================================================

// Gulp task to send fonts to production folder
gulp.task('fonts', function () {
    console.log('\nTransferring Fonts to '+ paths.production + '\n\n');
    return gulp
        .src(paths.fonts)
        .pipe(gulp.dest(paths.prodFonts));
});

// Gulp task to send images to production folder
gulp.task('images', function () {
    console.log('\nTransferring images to ' + paths.production + '\n\n');
    return gulp
        .src(paths.images)
        //.pipe(cache(imagemin(imageminOptions)))
        .pipe(gulp.dest(paths.prodImages));
});

// Gulp task to send videos to production folder
gulp.task('videos', function () {
    console.log('\nTransferring Videos to ' + paths.production + '\n\n');
    return gulp
        .src(paths.videos)
        .pipe(gulp.dest(paths.prodImages));
});

// Gulp task to send images to production folder
gulp.task('scripts', function () {
    console.log('\nTransferring scripts to ' + paths.production + '\n\n');
    return gulp
        .src(paths.scripts)
        .pipe(sourcemaps.write(paths.mapPath))
        .pipe(gulp.dest(paths.prodScripts));
});

// Gulp task to send html to production folder
gulp.task('html', function () {
    console.log('\nTransferring HTML to '+ paths.production + '\n\n');
    return gulp
        .src(paths.html)
        .pipe(gulp.dest(paths.prodViews));
});

// Gulp task to send html to production folder
gulp.task('html:styleguide', function () {
    console.log('\nTransferring HTML to Styleguide folder: ' + paths.sc5Output + '\n\n');
    return gulp
        .src(paths.html)
        .pipe(gulp.dest(paths.styleguide_htmlOutput));
});

// STYLEGUIDE CREATOR TASK FOR DEVELOPING THE PATTERN LIBRARY FROM THE SASS/CSS
//=============================================================================

// Gulp task to create styleguide of project using comments in SASS/CSS documents
gulp.task('styleguide:generate', function () {
    return gulp
        .src(paths.sassInput)
        .pipe(styleguide.generate(sc5Options))
        .pipe(gulp.dest(paths.sc5Output));
});

gulp.task('styleguide:applystyles', function () {
    return gulp
        .src('main.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(styleguide.applyStyles())
        .pipe(gulp.dest(paths.sc5Output));
});

// Create the Styleguide using SC5 Living Style Guide
gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);

// BROWSERSYNC TASK RELOADS THE AFTER SAVING CHANGES AUTOMATICALLY
//===================================================================

gulp.task('browserSync', function () {
    browserSync(browserSyncOptions);
});

// CLEAN TASK TO CLEAN UP THE PRODUCTION FOLDER BEFORE DEPLOYMENT
//===================================================================

// Gulp task to clean up the production folder 
gulp.task('clean', function (callback) {
    console.log('Cleaning production folder for Deployment \n\n');
    del(paths.production);
    return cache.clearAll(callback);
});

// Gulp task to clean up specific folders in production
gulp.task('clean:production', function (callback) {
    del(['production/**/*', '!production/images', '!production/images/**/*', callback]);
    console.log('Cleaning production folder for Deployment \n\n');
});

// BUILD TASKS FOR DEV AND PRODUCTION ENVIORNMENT
//=====================================================================

gulp.task('dev', ['browserSync'], function () {
    gulp.watch(paths.sassInput, ['sass', 'styleguide'])
        .on('change', function (event) {
            console.log('\n File' + event.path + ' was ' + event.type + ', running tasks...');
        });
    gulp.watch(paths.html, browserSync.reload);
    gulp.watch(paths.tsInput, ['typescript'], browserSync.reload);
    console.log(
        '\nDeveloper mode!\n\nSC5 Styleguide available at http://localhost:9000/\n'
    );
});

// Build settings for compiling sass, sassdoc, and typescript differently in production
gulp.task('prod', function (callback) {
    var prodResult = gulp
        .src(paths.sassInput)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write(paths.mapPath))
        .pipe(gulp.dest(paths.prodStyles));

    runSequence(
        ['clean:production','fonts', 'scripts', 'images', 'videos', 'html','sassdoc'], callback);
    return prodResult;
});

// Deploy task that moves files to production folder
gulp.task('deploy', ['prod'], function () {
    console.log('Deploying to Production Folder.');
});


// WATCH TASKS - ONE WATCH TASK TO RULE THEM ALL
//=====================================================================

// Gulp Task that watches the Sass, Typescript & the StyleGuide Generator
gulp.task('watch', ['browserSync'], function () {
    gulp.watch(paths.sassInput, ['sass', 'styleguide'])
        .on('change', function (event) {
            console.log('\n File' + event.path + ' was ' + event.type + ', running tasks...');
        });
    gulp.watch(paths.html, browserSync.reload);
    gulp.watch(paths.tsInput, ['typescript'], browserSync.reload);
});

//DEFAULT TASKS
//=====================================================================

// Default task that runs when you type "gulp" in the CLI
gulp.task('default', ['watch'], function () {
    console.log('\nRunning default tasks \n\n');
});