var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var pug = require('gulp-pug');

var browserSync = require('browser-sync').create();

var paths = {
  css: {
    all: './src/scss/**/*.scss',
    src: './src/scss/*.scss',
    dist: './dist/assets/css'
  },
  js: {
    all: './src/scripts/**/*.js',
    src: './src/scripts/*.js',
    dist: './dist/assets/js'
  },
  pug: {
    all: './src/pug/**/*.pug',
    src: './src/pug/*.pug',
    dist: './dist'
  }
}

// BrowserSync Task
gulp.task('browserSync', function() {
  browserSync.init({
    server: { baseDir: 'dist' }
  })
});

gulp.task('sass', function () {
  return gulp.src(paths.css.src)
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    // prefix styles
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest(paths.css.dist))
    .pipe(browserSync.reload({stream: true}));
});











// move src scripts files to dist folder
gulp.task('scripts', function () {
  return gulp.src(paths.js.src)
    .pipe(gulp.dest(paths.js.dist))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('pug', function () {
  return gulp.src(paths.pug.src)
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(paths.pug.dist))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', function () {
  gulp.watch(paths.css.all, ['sass']);
  gulp.watch(paths.js.all, ['scripts']);
  gulp.watch(paths.pug.all, ['pug']);
});


gulp.task('build', ['sass', 'scripts', 'pug']);

gulp.task('default', ['build', 'watch', 'browserSync']);
