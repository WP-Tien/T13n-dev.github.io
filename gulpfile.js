const   gulp = require( 'gulp' ),
        postcss = require('gulp-postcss'),
        autoprefixer = require('autoprefixer'),
        browserSync = require('browser-sync').create(),
        sass = require('gulp-sass'),
        cleanCSS = require('gulp-clean-css'),
        sourcemaps = require('gulp-sourcemaps'),
        rename = require('gulp-rename'),
        concat = require('gulp-concat'),
        imagemin = require('gulp-imagemin'),
        uglify = require('gulp-uglify'),
        del = require('del');
        plumber = require('gulp-plumber');

// Confuguration 
const cfg = require('./gulpconfig.json');
const paths = cfg.paths;

gulp.task( 'sass', function() {
    return gulp.src( paths.sass + '/*.scss' )
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe( sass({
        errorLogToConsole: true,
        outputStyle: 'expanded' 
    }).on('error', sass.logError ))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write(undefined, { sourceRoot: null }))
    .pipe(gulp.dest(paths.css));
});

gulp.task('minifycss', function() {
    return gulp.src(`${paths.css}/main.css`)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe( cleanCSS() )
    .pipe( rename({ suffix: '.min' }) )
    .pipe(sourcemaps.write('./'))
    .pipe( gulp.dest(paths.css) )
});

gulp.task('styles', function(callback) {
    // 
	gulp.series('sass', 'minifycss')(callback);
});

gulp.task('watch', function() {
    // css
    gulp.watch(`${paths.sass}/**/*.scss`, gulp.series('styles') );
    // js 
    gulp.watch(`${paths.sass}/*.js`);
    // image
    
});

gulp.task('browser-sync', function() {
    browserSync.init(cfg.browserSyncWatchFiles, cfg.browserSyncOptions);
});

gulp.task('copy-assets', function(done) {
    // Copy all Font Awesome Fonts
	gulp
    .src(`${paths.node}@fortawesome/fontawesome-free/webfonts/**/*.{ttf,woff,woff2,eot,svg}`)
    .pipe(gulp.dest('./fonts'));

    // Copy all Font Awesome SCSS files
	gulp
    .src(`${paths.node}@fortawesome/fontawesome-free/scss/*.scss`)
    .pipe(gulp.dest(`${paths.src}/sass/fontawesome`));

    done();
});

gulp.task('clean-source', function() {
	return del(['src/**/*']);
});

gulp.task('watch-bs', gulp.parallel('browser-sync', 'watch'));